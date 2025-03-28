// forms in react
import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  return (
    <form>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <label htmlFor="userName">user Name</label>
      <input
        type="text"
        placeholder="Enter your userName"
        value={formData.userName}
        onChange={handleInputChange}
        id="userName"
        name="userName"
      />
      <br />
      <label htmlFor="password">password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <button onClick={(e) => e.preventDefault()}>Submit</button>
    </form>
  );
}
