import React, { useState } from "react";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Footer } from "../../components/footer";
import { Delivery } from "../../components/deliveries";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import video from '../../videos/video1.mp4';

const TopSection = styled.h2`
    font-weight: 500;
    font-size: 35px;
    margin-bottom: 1em;
    color: rgb(220,20,60);;
`;

const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ViewHistoryButton = styled(Button)`
    background-color: #f2f2f2;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    color: #000;
    font-size: 14px;

    &:hover{
        filter: contrast(0.9);
    }
`;

const VideoContainer = styled.video`
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`;

const VideoBackground = styled.div`
    position: relative;
    overflow: hidden;
`;

export function DriverHome(props){

    const [deliveries, setDeliveries] = useState([
        {
            customerName: "Ethan Stone",
            customerAddress: "2020 3rd St",
            companyName: "McDonalds",
            pickupAddress: "3535 10th St",
            firstChecked: false,
            secondChecked: false,
        },
        {
            customerName: "John Doe",
            customerAddress: "3090 17th St",
            companyName: "Amazon",
            pickupAddress: "2111 Cottage Grove",
            firstChecked: false,
            secondChecked: false,
        },
        {
            customerName: "Jeff Rice",
            customerAddress: "2140 10th St",
            companyName: "Subway",
            pickupAddress: "3040 Indiana Ave",
            firstChecked: false,
            secondChecked: false,
        }
    ]);

    const [historyDeliveries, setHistoryDeliveries] = useState([{
        customerName: "Jeff Rice",
        customerAddress: "2140 10th St",
        companyName: "Subway",
        pickupAddress: "3040 Indiana Ave",
        firstChecked: false,
        secondChecked: false,
    }]);

    const handleFirstClick = (index) => {
        const newDeliveries = [...deliveries];
        newDeliveries[index].firstChecked = !newDeliveries[index].firstChecked;
        setDeliveries(newDeliveries);
    };

    const handleSecondClick = (index) => {
        const newDeliveries = [...deliveries];
        newDeliveries[index].secondChecked = !newDeliveries[index].secondChecked;
        setDeliveries(newDeliveries);

        if (newDeliveries[index].secondChecked) {
            const delivery = newDeliveries[index];
            setHistoryDeliveries([...historyDeliveries, delivery]);
            setDeliveries(newDeliveries.filter((d, i) => i !== index));
        }
    };

    return (
        <PageContainer>
            <VideoBackground>
                <VideoContainer src={video} autoPlay loop muted />
            </VideoBackground>
            <Navbar hide loggedIn/>
            <TopSection>Name's Deliveries</TopSection>
            <InnerPageContainer>
                {deliveries.map((delivery, index) => (
                    <Delivery
                        key={index}
                        customerName={delivery.customerName}
                        customerAddress={delivery.customerAddress}
                        companyName={delivery.companyName}
                        pickupAddress={delivery.pickupAddress}
                        firstChecked={delivery.firstChecked}
                        secondChecked={delivery.secondChecked}
                        onFirstClick={() => handleFirstClick(index)}
                        onSecondClick={() => handleSecondClick(index)}
                    />
                ))}
                <BottomContainer>
                    <Link to={{ pathname: "/driver/history", state: { historyDeliveries } }}>
                        <ViewHistoryButton>Show History</ViewHistoryButton>
                    </Link>
                </BottomContainer>
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    );
}