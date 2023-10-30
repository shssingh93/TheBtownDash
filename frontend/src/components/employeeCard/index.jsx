import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 300px;
    min-height: 250px;
    background-color: #fff;
    box-shadow: 0 0 3px; rgba(0, 0, 0, 0.3);
    margin: 0.5em;
    margin-bottom: 1.3em;
`;

const TopContainer = styled.div`
    width: 100%;
`;

const ServiceThumbnail = styled.div`
    width: 100%;
    height: 220px;

    img{
        width: 100%;
        height: 100%;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 15px 14px;
`;

const Title = styled.h2`
    font-size: 19px;
    margin: 0;
    font-weight: 500;
    color: #000;
    text-align: start;
`;

const Role = styled.h4`
    margin: 0;
    rgba(151, 151, 151, 1);
    font-size: 12px;
    font-weight: 400;
`;


export function EmployeeCard(props){
    const { thumbnail, name, role, email } = props.member;

    return <CardContainer>
        <TopContainer>
            <ServiceThumbnail>
                <img src={thumbnail} alt={name}/>
            </ServiceThumbnail>
        </TopContainer>
        <ContentContainer>
            <Title>{name}</Title>
            <Marginer direction="vertical" margin={10}/>
            <Role>{role}</Role>
            <Marginer direction="vertical" margin={6}/>
            <Role>{email}</Role>
        </ContentContainer>
    </CardContainer>
}