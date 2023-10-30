import React from "react";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Footer } from "../../components/footer";
import { Delivery } from "../../components/deliveries";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import video from '../../videos/video1.mp4';

const TopSection = styled.h2`
    font-weight: 500;
    font-size: 35px;
    margin-bottom: 1em;
    color: rgb(220,20,60);
`;

const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ViewCurrentButton = styled(Button)`
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

export function DriverHistory(props) {
    const location = useLocation();
    const historyDeliveries = location.state && location.state.historyDeliveries;

  
    return (
      <PageContainer>
         <VideoBackground>
            <VideoContainer src={video} autoPlay loop muted />
          </VideoBackground>
        <Navbar hide loggedIn />
        <TopSection>Name's Delivery History</TopSection>
        <InnerPageContainer>
          {historyDeliveries && historyDeliveries.map((delivery, index) => (
            <Delivery
              key={index}
              customerName={delivery.customerName}
              customerAddress={delivery.customerAddress}
              companyName={delivery.companyName}
              pickupAddress={delivery.pickupAddress}
              firstChecked={delivery.firstChecked}
              secondChecked={delivery.secondChecked}
            />
          ))}
          {!historyDeliveries && <div>No Previous Deliveries</div> }
          <BottomContainer>
            <Link to="/driver">
              <ViewCurrentButton>Current Orders</ViewCurrentButton>
            </Link>
          </BottomContainer>
        </InnerPageContainer>
        <Footer />
      </PageContainer>
    );
  }