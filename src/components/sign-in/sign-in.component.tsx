import React, { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn: React.FC<{}> = ({}) => {
  const [credentials, setCredentials] = useState<any>({
    email: "",
    password: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleChange = (e: any) => {
    const { value, name } = e;
    setCredentials({ [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          onChange={handleChange}
          required
          name="email"
          type="email"
          value={credentials.email}
          label="Email"
        />
        <FormInput
          onChange={handleChange}
          required
          name="password"
          type="password"
          value={credentials.password}
          label="Password"
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
