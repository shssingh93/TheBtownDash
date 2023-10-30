import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { ServiceContext } from './serviceContext';
import { AddService } from './addService';
import { RemoveService } from './removeService';

const BoxContainer = styled.div`
    width: 560px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15,10,0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 200px; //change this to move text
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 320%;    
    height: 500px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -480px;
    left: -450px;
    background: #000;
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "500px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export function EditServices(props) {
  const { initialActive } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState(initialActive ? initialActive : "add");
  
    const playExpandingAnimation = () => {
      setExpanded(true);
      setTimeout(() => {
        setExpanded(false);
      }, expandingTransition.duration * 1000 - 1500);
    };
  
    const switchToRemove = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("remove");
      }, 400);
    };
  
    const switchToAdd = () => {
      playExpandingAnimation();
      setTimeout(() => {
        setActive("add");
      }, 400);
    };
  
    const contextValue = { switchToRemove, switchToAdd };
  
    return (
        <Container>
      <ServiceContext.Provider value={contextValue}>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "add" && (
              <HeaderContainer>
                <HeaderText>Add</HeaderText>
                <HeaderText>Service</HeaderText>
                <SmallText>Enter Name of Service</SmallText>
              </HeaderContainer>
            )}
            {active === "remove" && (
              <HeaderContainer>
                <HeaderText>Remove</HeaderText>
                <HeaderText>Service</HeaderText>
                <SmallText>Select Service to Remove</SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {active === "add" && <AddService />}
            {active === "remove" && <RemoveService />}
          </InnerContainer>
        </BoxContainer>
      </ServiceContext.Provider>
      </Container>
    );
  }