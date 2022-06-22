import { useEffect, useState } from "react";
import "./App.css";
import Input from "./component/Input";

function App() {
  const [countryName, setCountryName] = useState("");
  const [weather, setWeather] = useState("");

  const fetchWeather = async () => {
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${countryName}`
    );
    const data = await response.json();
    setWeather(data.temperature);
  };

  useEffect(() => {
    fetchWeather();
  }, [countryName]);

  return (
    <div className="container py-5">
      <h1 className="py-2"> Weather App</h1>
      <Input
        onChange={(e) => setCountryName(e.target.value)}
        className="py-2"
      />
      <h5>
        {" "}
        Temperature in <span>{countryName}</span> is :{weather}{" "}
      </h5>
    </div>
  );
}

export default App;
