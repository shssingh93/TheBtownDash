import React from "react";
import styled from "styled-components";
import { ServiceCard } from "../../components/serviceCard";
import { deviceSize } from "../../components/responsive";
import FedExpressThumbnail from "../../images/thumbnails/fedExpress.png";
import FedExOvernightThumbnail from "../../images/thumbnails/fedexovernight.jpg";
import InstacartThumbnail from "../../images/thumbnails/instacart.png";
import DoorDashThumbnail from "../../images/thumbnails/doordash.jpg"
import { SearchBar } from "../../components/searchBar";

const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.h1`
    font-weight: 800;
    color: #000;

    @media screen and (max-width: ${deviceSize.mobile}px){
        font-size: 24px;
    }
`;

const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


export function Services(props){
    const services = [
        {
            title: "FedEx Express",
            thumbnailUrl: FedExpressThumbnail,
            rating: "5/5", 
            serviceCreator: { "id": 1, "fullName": "FedEx"}
        },
        {
            title: "DoorDash",
            thumbnailUrl: DoorDashThumbnail,
            rating: "4.9/5", 
            serviceCreator: { "id": 2, "fullName": "DoorDash"}
        },
        {
            title: "Instacart",
            thumbnailUrl: InstacartThumbnail,
            rating: "4.7/5", 
            serviceCreator: { "id": 3, "fullName": "Instacart"}},
        {
            title: "FedEx Priority Overnight",
            thumbnailUrl: FedExOvernightThumbnail,
            rating: "4.6/5", 
            serviceCreator: { "id": 1, "fullName": "FedEx"}
        },
        ];

    return <ServicesContainer>
        <Title>Popular Services</Title>
        <ServicesWrapper>
            {services.map((service) => (
                <ServiceCard service={service}/>
            ))}
        </ServicesWrapper>
        <BottomContainer>
        <SearchBar/>
        
        </BottomContainer>
    </ServicesContainer>
}