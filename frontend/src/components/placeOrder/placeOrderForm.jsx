import React, { useState } from "react";
import {
  BoxContainer,
  DropDown,
  FormContainer,
  Input,
  SubmitButton,
} from "../accountBox/common";
import { Marginer } from "../marginer";
import styled from "styled-components";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const StyledSubmitButton = styled(SubmitButton)`
  color: #fff;
  background-color: #fe9e0d;
`;

async function getPlaceDetails(place_id) {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=geometry&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status === "OK") {
    const { lat, lng } = data.result.geometry.location;
    return { lat, lng };
  } else {
    console.error("Error fetching place details:", data.status);
    return null;
  }
}

export function PlaceOrderForm(props) {
  const [selectedOptionService, setSelectedOptionService] = useState("");
  const [selectedOptionSize, setSelectedOptionSize] = useState("");
  const [pickupLocation, setPickupLocation] = useState(null);
  const [deliveryLocation, setDeliveryLocation] = useState(null);

  const handlePickupSelect = async (location) => {
    const coordinates = await getPlaceDetails(location.place_id);
    setPickupLocation({ ...location, coordinates });
  };

  const handleDeliverySelect = async (location) => {
    const coordinates = await getPlaceDetails(location.place_id);
    setDeliveryLocation({ ...location, coordinates });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation and handle errors if needed

    // Sending the data to our backend
    //Guys, please replace the "our-backed-api-url" with the appropriate url.
    //And change wherever changes are necessary.
    const response = await fetch("our-backend-api-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pickupLocation,
        deliveryLocation,
        selectedOptionService,
        selectedOptionSize,
      }),
    });

    // Handle the response from backend if necessary
    if (response.ok) {
      // Success
    } else {
      // Error
    }
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <GooglePlacesAutocomplete
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          selectProps={{
            value: pickupLocation,
            onChange: handlePickupSelect,
            placeholder: "Pickup Address",
          }}
        />
        <GooglePlacesAutocomplete
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          selectProps={{
            value: deliveryLocation,
            onChange: handleDeliverySelect,
            placeholder: "Delivery Address",
          }}
        />
        <DropDown
          value={selectedOptionService}
          onChange={(e) => setSelectedOptionService(e.target.value)}
        >
          <option value="">Select Delivery Service</option>
          <option value="option1">FedEx Express</option>
          <option value="option2">Doordash</option>
          <option value="option3">Instacart</option>
          <option value="option4">FedEx Priority Overnight</option>
        </DropDown>
        <DropDown
          value={selectedOptionSize}
          onChange={(e) => setSelectedOptionSize(e.target.value)}
        >
          <option value="">Select Package Size</option>
          <option value="option1">Small</option>
          <option value="option2">Medium</option>
          <option value="option3">Large</option>
        </DropDown>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <StyledSubmitButton type="submit">Place Order</StyledSubmitButton>
    </BoxContainer>
  );
}

