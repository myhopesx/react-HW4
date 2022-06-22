import React from "react";

const Input = ({ onChange, countryName }) => {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Enter a country name"
        aria-label="Recipient's username"
        value={countryName}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
