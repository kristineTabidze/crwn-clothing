import React, { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import { createUserProfileDocument } from "./../../firebase/firebase.utils";
import Button from "../button/button.component";
import { useHistory } from "react-router-dom";

const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState<any>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useHistory();

  const { displayName, email, password, confirmPassword } = credentials;
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      history.push("/");
    } catch (e) {
      alert(e.message);
    }
  };
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="signUpContainer">
      <h2>I Don't Have An Account</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          value={displayName}
          name="displayName"
          label="Display Name"
          onChange={onChange}
        />
        <FormInput
          required
          type="email"
          value={email}
          name="email"
          label="Email"
          onChange={onChange}
        />
        <FormInput
          required
          type="password"
          value={password}
          name="password"
          label="Password"
          onChange={onChange}
        />
        <FormInput
          required
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          label="Confirm Password"
          onChange={onChange}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
