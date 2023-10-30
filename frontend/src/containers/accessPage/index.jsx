import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";

const StyledInnerContainer = styled(InnerPageContainer)`
    margin-top: 6em;
`;

export function AccessPage(props){
    const { action } = useParams();

    return <PageContainer>
        <Navbar hide/>
        <StyledInnerContainer>
            <AccountBox initialActive={action}/>
        </StyledInnerContainer>
        <Footer />
    </PageContainer>
}