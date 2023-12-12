import "./App.css";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true,
  });

  function handleForm(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { password, passwordConfirm, joinedNewsletter } = event.target;

    if (password.value === passwordConfirm.value) {
      console.log("Successfully signed up");
    } else {
      console.log("password do not match");
      return;
    }

    if (joinedNewsletter.checked) {
      console.log("Thank you for joining our newsletter");
    }

    setFormData({
      email: "",
      password: "",
      passwordConfirm: "",
      joinedNewsletter: true,
    });
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleForm}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleForm}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleForm}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            onChange={handleForm}
            name="joinedNewsletter"
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit" onSubmit={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}
