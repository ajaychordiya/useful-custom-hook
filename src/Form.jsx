import React from "react";
import useForms from "./custom-hooks/useForms";
const Form = () => {
  const [value, handleChange] = useForms({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>

      {value.email}
    </div>
  );
};

export default Form;
