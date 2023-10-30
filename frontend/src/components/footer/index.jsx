import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../logo";

import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 3em;
    padding-bottom: 0;
    border-top: 0.6px solid rgba(0, 0, 0, 0.3);
    background-color: #fff;
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1em;
    justify-content: space-evenly;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:not(:last-of-type){
        margin-right: 3%;
    }
`;

const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-top: 0.6px solid rgba(0, 0, 0, 0.3);
    padding: 0 10px;
`;

const RightBottomContainer = styled.div`
    display: flex;
`;

const LeftBottomContainer = styled.div`
    display: flex;
`;

const Title = styled.h2`
    margin: 0;
    margin-bottom: 13px;
    color: #000;
    font-weight: 600;  
    font-size: 20px;
`;

const FooterLink = styled(Link)`
    text-decoration: none;
    color: #6f6f6f;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    

    &:not(:last-of-type){
        margin-bottom: 10px;
    }
`;

const PrivacyText = styled.h6`
    color: #a3a3a3;
    font-size: 11px;
    margin: 0;
    margin-left: 10px;
    display: flex;
    margin-top: 5px;
    align-items: center;
`;

const MediaIcon = styled.div`
    color: #8a8a8a;
    font-size: 20px;
    cursor: pointer;
    transition: background-color, 200ms ease-in-out;

    &:not(:last-of-type) {
        margin-right: 10px;
    }

    
    &:hover {
        color: #777777;
    }
`;

export function Footer(props){
    return <FooterContainer>
        <TopContainer>
            <ContentContainer>
                <Title>Get to Know Us</Title>
                <FooterLink>Careers</FooterLink>
                <FooterLink to="/about">About The B-Town Dash</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
            </ContentContainer>
            <ContentContainer>
                <Title>Categories</Title>
                <FooterLink>Food</FooterLink>
                <FooterLink>Groceries</FooterLink>
                <FooterLink>Home Goods</FooterLink>
                <FooterLink>Other</FooterLink>
            </ContentContainer>
            <ContentContainer>
                <Title>Access</Title>
                <FooterLink to="/access/signin">Login</FooterLink>
                <FooterLink to="/access/signup">Register</FooterLink>
                <FooterLink>Become Driver</FooterLink>
            </ContentContainer>
            <ContentContainer>
                <Title>Locations</Title>
                <FooterLink>Bloomington, IN</FooterLink>
            </ContentContainer>
        </TopContainer>
        <BottomContainer>
            <LeftBottomContainer>
                <BrandLogo hideLogo color="#8a8a8a" textSize={25}/>
                <PrivacyText>&#169;All Rights Reserved. 2023</PrivacyText>
            </LeftBottomContainer>
            <RightBottomContainer>
                <MediaIcon>
                    <FontAwesomeIcon icon={faFacebook} />
                </MediaIcon>
                <MediaIcon>
                    <FontAwesomeIcon icon={faTwitter} />
                </MediaIcon>
                <MediaIcon>
                    <FontAwesomeIcon icon={faInstagram} />
                </MediaIcon>
            </RightBottomContainer>
        </BottomContainer>
    </FooterContainer>
}