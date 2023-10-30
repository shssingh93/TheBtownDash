import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #fff;
    padding: 6px 1.3em;
    font-size: ${({ size }) => size ? size + "px" : "18px"};
    font-weight: 500;
    border-radius: 3px;
    background-color: rgb(220,20,60);
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        border: 1px solid #000000;
    }

    &:focus{
        outline: none;
    }
`;

export function Button(props){
    const {size} = props;
    return <ButtonWrapper size={size} className={props.className}> { props.children } </ButtonWrapper>
}