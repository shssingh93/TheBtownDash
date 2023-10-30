import React from "react";
import NavBar from "../../components/admin/NavBar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Footer } from "../../components/footer";
import { EditServices } from "../../components/editServices";
import styled from "styled-components";
import video from '../../videos/video1.mp4';

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

export function AdminServices(props){
    return (
        <PageContainer>
            <NavBar />
            <VideoBackground>
                <VideoContainer src={video} autoPlay loop muted />
            </VideoBackground>
            <InnerPageContainer>
                <EditServices />
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    );
}