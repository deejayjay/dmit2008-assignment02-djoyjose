import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { Logo } from "../../components/Logo";
import banner from "../../static/images/banner.webp";
import { LoginContainer, LoginStyles, LoginLeft, LoginRight, LoginForm, InputControl, FormLabel, FormInput, SignInBtn, LogoContainer } from "./styles";

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
            <LoginForm onSubmit={onSignInHandler}>
              <LogoContainer>
                <Logo logoWidth="3rem" />
              </LogoContainer>
              <h2>Member Sign In</h2>
              <InputControl>
                <FormLabel for="userEmail">Email</FormLabel>
                <FormInput type="email" id="userEmail" name="userEmail" />
              </InputControl>
              <InputControl>
                <FormLabel for="userPassword">Password</FormLabel>
                <FormInput type="password" id="userPassword" name="userPassword" />
              </InputControl>
              <SignInBtn id="btnSignIn" class="btn-sign-in">
                Sign In
              </SignInBtn>
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
