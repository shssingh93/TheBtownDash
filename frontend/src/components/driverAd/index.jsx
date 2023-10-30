import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../logo";
import { Marginer } from "../marginer";

import DriverImg from "../../images/delivery.jfif"
import { Button } from "../button";

const DriverAdContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    background-color: #990000;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const SloganContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 5em;
`;

const Slogan = styled.h2`
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    line-height: 1.3;
    text-align: start;
`;

const StandoutImage = styled.div`
    width: 35em;
    height: 29em;
    padding: 100px 0;

    img{
        width: 100%;
        height: 100%;
    }
`;

export function DriverAd(props){
    return <DriverAdContainer>
        <ContentContainer>
            <SloganContainer>
                <BrandLogo logoSize={35} textSize={30}/>
                <Marginer direction="vertical" margin="1em" />
                <SloganContainer>
                    <Slogan>Interested in becoming a delivery driver?</Slogan>
                </SloganContainer>
                <Marginer direction="vertical" margin="1em"/>
                <Button size={15}>Join as Driver</Button>
            </SloganContainer>
            <StandoutImage>
                <img src={DriverImg} alt="join-as-driver" />
            </StandoutImage>
        </ContentContainer>
    </DriverAdContainer>
}