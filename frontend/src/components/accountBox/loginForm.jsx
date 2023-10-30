import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props){

    const { switchToSignup } = useContext(AccountContext);
    const { switchToForgotPassword } = useContext(AccountContext)
    
    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
        </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <MutedLink href="#"><BoldLink href="#" onClick={switchToForgotPassword}>Forgot password?</BoldLink></MutedLink>
            <Marginer direction="vertical" margin="1.6em"/>
            <SubmitButton type="submit" to="/customer">Log In</SubmitButton>
            <Marginer direction="vertical" margin="1.6em"/>
            <MutedLink href="#">Don't have an account? <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink></MutedLink>
    </BoxContainer>
}