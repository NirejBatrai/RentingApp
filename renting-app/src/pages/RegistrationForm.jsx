import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleRegister = async () => {
    await handleRegistration();
    onClose();
  };

  const handleRegistration = async () => {
    console.log(email);
    console.log(confirmPassword);

    // Validate email and password
    if (!email || !confirmPassword) {
      console.error("Email and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: confirmPassword,
        }),
      });
      const data = await response.json();
      console.log(data.JSON); // LOG the response from the backend
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className='controls'>
      <p>
        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>

      <p>
        <label>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <p>
        <label>Confirm Password</label>
        <input
          type='password'
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
      </p>
      <button className='button' onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default RegistrationForm;
