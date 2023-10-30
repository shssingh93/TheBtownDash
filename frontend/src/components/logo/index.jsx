import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoImg from "../../images/logo.png"

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.div`
    width: ${({ size }) => size ? size*1.5 + "px" : "3em"};
    height: ${({ size }) => size ? size + "px" : "2em"};

    img{
        width: 100%;
        height: 100%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;


const LogoTitle = styled.div`
    margin: 0;
    font-size: ${({ size }) => size ? size + "px" : "20px"};
    color: ${({ color }) => (color ? color : "#fff")};
    font-weight: 900;
    margin-left: 7px;
`;

export function BrandLogo(props){
    const { logoSize, textSize, color, hideLogo } = props;

    return <LogoContainer>
        {!hideLogo && (<Link to="/"> 
            <LogoImage size={logoSize}>
                <img src={LogoImg} alt="B-Town Logo" /> 
            </LogoImage> 
        </Link>)}
        <StyledLink to="/">
            <LogoTitle size={textSize} color={color}>The B-Town Dash</LogoTitle>
        </StyledLink>
    </LogoContainer>
}