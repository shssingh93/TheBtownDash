import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginForm } from './loginForm';
import { SignupForm } from './signupForm';
import { ForgotPasswordForm } from './forgotPasswordForm';
import { motion } from "framer-motion";
import { AccountContext } from './accountContext';

const BoxContainer = styled.div`
    width: 560px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15,10,0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 200px; //change this to move text
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 320%;    
    height: 500px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -480px;
    left: -450px;
    background: rgb(220,20,60);
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "500px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

export function AccountBox(props) {
  const { initialActive } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState(initialActive ? initialActive : "signin");
  
    const playExpandingAnimation = () => {
      setExpanded(true);
      setTimeout(() => {
        setExpanded(false);
      }, expandingTransition.duration * 1000 - 1500);
    };
  
    const switchToSignup = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("signup");
      }, 400);
    };
  
    const switchToSignin = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("signin");
      }, 400);
    };

    const switchToForgotPassword = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("forgot");
      }, 400);
    };
  
    const contextValue = { switchToSignup, switchToSignin, switchToForgotPassword };
  
    return (
      <AccountContext.Provider value={contextValue}>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "signin" && (
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
              </HeaderContainer>
            )}
            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-up to continue!</SmallText>
              </HeaderContainer>
            )}
            {active === "forgot" && (
              <HeaderContainer>
                <HeaderText>Recover</HeaderText>
                <HeaderText>Password</HeaderText>
                <SmallText>Enter your email to recover your password.</SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignupForm />}
            {active === "forgot" && <ForgotPasswordForm />}
          </InnerContainer>
        </BoxContainer>
      </AccountContext.Provider>
    );
  }