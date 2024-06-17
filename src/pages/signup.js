// src/components/SignUpForm.js
import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Message } from "semantic-ui-react";
import { registerUser } from "../services/authService.js";
import MultiModal from "../components/Modal.js";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/;

    if (!name) errors.name = "First name is required";
    if (!lastName) errors.lastName = "Last name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 10 characters long, include one lowercase letter, one uppercase letter, one number, and one special character";
    }
    if (!agree) errors.agree = "You must agree to the terms and conditions";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const userData = {
        name,
        lastName,
        email,
        password,
      };
      const response = await registerUser(userData);
      console.log("User registered:", response.name, response.lastName);
      setModalOpen(true);
    } catch (err) {
      console.log(err);
      setError(err.response ? err.response.data.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} loading={loading} error={!!error}>
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          placeholder="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!validationErrors.name}
          required
        />
        {validationErrors.name && (
          <Message error content={validationErrors.name} />
        )}
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={!!validationErrors.lastName}
          required
        />
        {validationErrors.lastName && (
          <Message error content={validationErrors.lastName} />
        )}
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!validationErrors.email}
          required
        />
        {validationErrors.email && (
          <Message error content={validationErrors.email} />
        )}
        <Form.Field
          id="form-input-control-password"
          control={Input}
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!validationErrors.password}
          required
        />
        {validationErrors.password && (
          <Message error content={validationErrors.password} />
        )}
        <Form.Field
          control={Checkbox}
          label="I agree to the terms and conditions"
          checked={agree}
          onChange={(e, { checked }) => setAgree(checked)}
          error={!!validationErrors.agree}
        />
        {validationErrors.agree && (
          <Message error content={validationErrors.agree} />
        )}
        <Button type="submit" primary>
          Sign Up
        </Button>
        {error && <Message error content={error} />}
      </Form>
      <MultiModal
        pHeader="Welcome"
        pContent="Now you can add recipes to favorites."
        pRedirect="/"
        pModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

export default SignUpForm;
