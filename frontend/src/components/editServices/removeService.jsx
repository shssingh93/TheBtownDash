import React, { useContext, useState } from "react";
import { ServiceContext } from "./serviceContext";
import { BoldLink, BoxContainer, DropDown, FormContainer, MutedLink, SubmitButton } from "../accountBox/common";
import { Marginer } from "../marginer";
import styled from "styled-components";

const ServiceSubmit = styled(SubmitButton)`
    background-color: #000;
`;

const ServiceBoldLink = styled(BoldLink)`
    color: #000;
`;

export function RemoveService(props){
    const { switchToAdd } = useContext(ServiceContext);
    const [selectedOption, setSelectedOption] = useState("");

    const options = ["FedEx Express", "DoorDash", "Instacart", "FedEx Priority Overnight"];
    
    return <BoxContainer>
        <FormContainer>
            <DropDown value={selectedOption} onChange={(e) => {const value = e.target.value;
                setSelectedOption(value); }}>
                <option value="">Select Service to Remove</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}

            </DropDown>
        </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <ServiceSubmit>Remove Service</ServiceSubmit>
            <Marginer direction="vertical" margin={10}/>
            <MutedLink href="#"><ServiceBoldLink href="#" onClick={switchToAdd}>Add Service</ServiceBoldLink></MutedLink>
            <Marginer direction="vertical" margin="1.6em"/>
    </BoxContainer>
}