import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function ForgotPasswordForm(props){

    const { switchToSignin } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email"/>
        </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <SubmitButton type="submit">Send Recovery Email</SubmitButton>
            <Marginer direction="vertical" margin="1.6em"/>
            <MutedLink href="#">Back to <BoldLink href="#" onClick={switchToSignin}>Signin</BoldLink></MutedLink>
    </BoxContainer>
}