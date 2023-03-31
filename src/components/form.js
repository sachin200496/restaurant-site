import "./form.css";
import { useState } from "react";

export default function Form() {
  const [values, setvalues] = useState({ fullName: "", age: "" });

  function changeValues(event) {
    const initialValue = event.target.name;
    setvalues({ ...values, [initialValue]: event.target.value });
  }

  function handleSubmit() {}

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label for="fullname">Full Name: </label>
        <input
          type="text"
          name="fullName"
          id="fullname"
          value={values.fullName}
          onChange={changeValues}
        />
        <label for="age">Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          value={values.age}
          onChange={changeValues}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
