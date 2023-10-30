import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink, DropDown } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props){

    const { switchToSignin } = useContext(AccountContext);
    const [selectedOptionOne, setSelectedOptionOne] = useState("");
    const [selectedOptionTwo, setSelectedOptionTwo] = useState("");

    const optionsOne = ["In what city were you born?", "What is the name of your favorite pet?", "What high school did you attend?", "What year was your father born?", "What year was your father (or mother) born?", "What sport did you play growing up?", "What is your oldest siblings middle name?", "In what city or town did your parents meet?"];
    const optionsTwo = optionsOne.filter((option) => option !== selectedOptionOne);

    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Full Name"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <DropDown value={selectedOptionOne} onChange={(e) => {const value = e.target.value;
                setSelectedOptionOne(value);
                //reset second dropdown when the first dropdown changes
                setSelectedOptionTwo(""); }}>
                <option value="">Select First Security Question</option>
                {optionsOne.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </DropDown>
            <Input type="text" placeholder="Answer" />
            <DropDown value={selectedOptionTwo} onChange={(e) => setSelectedOptionTwo(e.target.value)}>
                <option value="">Select Second Security Question</option>
                {optionsTwo.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </DropDown>
            <Input type="text" placeholder="Answer" />
        </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <SubmitButton type="submit" to="/customer">Sign Up</SubmitButton>
            <Marginer direction="vertical" margin="1.6em"/>
            <MutedLink href="#">Already have an account? <BoldLink href="#" onClick={switchToSignin}>Log In</BoldLink></MutedLink>
    </BoxContainer>
    
}