import React from "react";
import { Footer } from "../../components/footer";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import NavBar from "../../components/admin/NavBar";
import { AddDriver } from "../../components/addDriver";
import video from '../../videos/video1.mp4';
import styled from "styled-components";

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

export function DriverRegistrationPage(props){
    return <PageContainer>
        <NavBar/>
        <VideoBackground>
            <VideoContainer src={video} autoPlay loop muted />
        </VideoBackground>
        <InnerPageContainer>
            <AddDriver />
        </InnerPageContainer>
        <Footer />
    </PageContainer>
}