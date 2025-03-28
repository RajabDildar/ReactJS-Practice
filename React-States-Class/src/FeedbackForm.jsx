import { useState } from "react";

export default function FeedbackForm() {
  let [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    rating: 1,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      userName: "",
      remarks: "",
      rating: 1,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="userName">Enter your user name</label>
      <input
        type="text"
        placeholder="Enter your userName"
        name="userName"
        id="userName"
        value={formData.userName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="remarks">Give your valuable remarks</label>
      <textarea
        name="remarks"
        id="remarks"
        placeholder="Enter your remarks"
        value={formData.remarks}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <br />
      <label htmlFor="rating">Rate us (1 - 5): </label>
      <input
        type="number"
        name="rating"
        id="rating"
        min={1}
        max={5}
        value={formData.rating}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
