import React, { useState } from "react";
import styled from "styled-components";
import MapIconImage from "../../images/mapicon.png"


const DeliveryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100px;
    background-color: #d3d3d3;
    border: 2px solid rgba(15, 15, 15, 0.19);
    margin-bottom: 1em;
`;

const CheckBox = styled.input`
    align-items: flex-start;
`;

const Title = styled.h2`
    font-size: 19px;
    margin: 0;
    font-weight: 500;
    color: #000;
    text-align: center;
    border-bottom: 1px solid rgba(15, 15, 15, 0.19);
`;

const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Address = styled.h2`
    font-size: 28px;
    margin: 0;
    font-weight: 500;
    color: rgb(220,20,60);
    text-align: center;
`;

const MapIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 5px;
`;

const InformationText = styled.h4`
    margin: 0 10px;
    rgba(151, 151, 151, 1);
    font-size: 14px;
    font-weight: 400;
    text-align: start;
`;

const Name = styled(InformationText)`
    font-size: 18;
    font-weight: 600;
    display: inline;
    color: #000;
    margin-left: 0;
`;



export function Delivery(props){
    const { customerName, customerAddress, companyName, pickupAddress } = props;
    const [firstChecked, setFirstChecked] = useState(false);
    const handleFirstClick = () => setFirstChecked(!firstChecked);

    const [secondChecked, setSecondChecked] = useState(false);
    const handleSecondClick = () => setSecondChecked(!secondChecked);

    return (
        <DeliveryContainer>
            {!firstChecked && (
                <>
                    <Title>
                        Pickup Order At:
                        <AddressWrapper>
                            <MapIcon src={MapIconImage} />
                            <Address>{pickupAddress}</Address>
                        </AddressWrapper>
                    </Title>
                    <InformationText>From <Name>{companyName}</Name></InformationText>
                    <InformationText>Check when order has been picked up <CheckBox type="checkbox" onClick={handleFirstClick}/></InformationText>
                </>
            )}

            {firstChecked && !secondChecked && (
                <>
                    <Title>
                        Deliver to:
                        <AddressWrapper>
                            <MapIcon src={MapIconImage} />
                            <Address>{customerAddress}</Address>
                        </AddressWrapper>
                    </Title>
                    <InformationText>For <Name>{customerName}</Name></InformationText>
                    <InformationText>Check when order has been delivered <CheckBox type="checkbox" onClick={handleSecondClick}/></InformationText>
                </>
            )}

            {firstChecked && secondChecked && (
                <>
                    <Title>
                        Delivery Completed
                    </Title>
                    <InformationText>Delivered to <Name>{customerName}</Name></InformationText>
                    <InformationText>Completed on {new Date().toLocaleString()}</InformationText>
                </>
            )}
        </DeliveryContainer>
    );
}