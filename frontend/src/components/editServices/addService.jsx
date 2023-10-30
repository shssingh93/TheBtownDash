import React, { useContext } from "react";
import { ServiceContext } from "./serviceContext";
import { BoldLink, BoxContainer, FormContainer, MutedLink, SubmitButton } from "../accountBox/common";
import { Input } from "../accountBox/common";
import { Marginer } from "../marginer";
import styled from "styled-components";

const ServiceSubmit = styled(SubmitButton)`
    background-color: #000;
`;

const ServiceBoldLink = styled(BoldLink)`
    color: #000;
`;

export function AddService(props){
    const { switchToRemove } = useContext(ServiceContext);
    
    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Company Name"/>
            <Input type="text" placeholder="Service Name"/>
        </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <ServiceSubmit>Add Service</ServiceSubmit>
            <Marginer direction="vertical" margin={10}/>
            <MutedLink href="#"><ServiceBoldLink href="#" onClick={switchToRemove}>Remove Service</ServiceBoldLink></MutedLink>
            <Marginer direction="vertical" margin="1.6em"/>
    </BoxContainer>
}