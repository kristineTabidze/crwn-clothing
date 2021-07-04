import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.components";
import "./styles.scss";

const SignInAndSignUp: React.FC<{}> = ({}) => {
  return (
    <div className="signUpAndSignInContainer">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
