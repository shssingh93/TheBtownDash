import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/logo";

import TopSectionBackgroundImage from "../../images/landingpage.jpg"
import TheBestDeliveryImage from "../../images/bestdelivery.png"
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";

//can use background-position to put image in better spot
const TopContainer = styled.div`
    width: 100%;
    height: 900px;
    background: url(${TopSectionBackgroundImage});
    background-size: cover;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 127, 127, 0.9);
    display: flex;
    flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const StandoutImage = styled.div`
    width: 37em;
    height: 32em;

    img{
        width:100%;
        height: 100%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 500;
    font-size: 35px;
`;


export function TopSection(props){
    const { children } = props;

    return <TopContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
            <LogoContainer>
                <BrandLogo logoSize={60} textSize={60}/>
                <Marginer direction="vertical" margin={8}/>
                <SloganText>Speeding up your deliveries, one dash at a time</SloganText>
                <Marginer direction="vertical" margin={15}/>
                <Button>Join Now!</Button>
            </LogoContainer>
            <StandoutImage>
                <img src={TheBestDeliveryImage} alt="best"/>
            </StandoutImage>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopContainer>
}