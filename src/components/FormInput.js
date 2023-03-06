import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formload } from "../utlis/formdataSlice";

function Form() {
  const [selectedOption, setSelectedOption] = useState("India");
  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(formload(selectedOption));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">Select a country:</label>
      <select id="country" value={selectedOption} onChange={handleOptionChange}>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
