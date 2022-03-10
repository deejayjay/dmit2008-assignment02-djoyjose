import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { Logo } from "../../components/logo";
import banner from "../../static/images/banner.webp";
import { Button } from "../../ui/Button/";
import { LoginContainer, LoginStyles, LoginLeft, LoginRight, LoginForm, InputControl, FormLabel, FormInput, LogoContainer } from "./styles";

function LoginPage(props) {
  const navigate = useNavigate();

  function onSignInHandler(e) {
    e.preventDefault();

    const isValidUser = true;

    if (isValidUser) {
      navigate("/dashboard");
    }
  }

  return (
    <>
      <LoginStyles>
        <LoginContainer>
          <LoginLeft bgImg={banner}>
            <section>
              <h1>ToysWonderLand</h1>
              <p>We write your child's ToyStory</p>
            </section>
          </LoginLeft>
          <LoginRight>
            <LoginForm onSubmit={onSignInHandler} autoComplete="off">
              <LogoContainer>
                <Logo logoWidth="3rem" />
              </LogoContainer>
              <h2>Member Sign In</h2>
              <InputControl>
                <FormLabel htmlFor="userEmail">Email</FormLabel>
                <FormInput type="email" id="userEmail" name="userEmail" required />
              </InputControl>
              <InputControl>
                <FormLabel htmlFor="userPassword">Password</FormLabel>
                <FormInput type="password" id="userPassword" name="userPassword" required />
              </InputControl>
              <Button text="Sign In" display="block" width="100%" margin="0 0 1rem" />
              <Link to="/" className="link-forgot">
                Forgot your password?
              </Link>
            </LoginForm>
          </LoginRight>
        </LoginContainer>
      </LoginStyles>
    </>
  );
}

export default LoginPage;
