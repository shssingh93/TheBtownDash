import React from "react";
import { BoxContainer, FormContainer, Input, SubmitButton } from "../accountBox/common";
import { Marginer } from "../marginer";
import styled from "styled-components";

const StyledSubmitButton = styled(SubmitButton)`
    color: #fff;
    background-color: #000;
`;

export function AddDriverForm(props){
    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Full Name"/>
            <Input type="email" placeholder="Email"/>
            <Input type="text" placeholder="Vehicle"/>
        </FormContainer>
        <Marginer direction="vertical" margin={10}/>
        <StyledSubmitButton type="submit">Add Driver</StyledSubmitButton>
    </BoxContainer>
}