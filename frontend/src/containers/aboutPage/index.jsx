import React, { useEffect } from "react";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Footer } from "../../components/footer";
import styled from "styled-components";
import { EmployeeCard } from "../../components/employeeCard";
import EthanThumbnail from "../../images/thumbnails/ethanthumbnail.jpg";
import AnkuThumbnail from "../../images/thumbnails/ankuthumbnail.jpg";
import VishalThumbnail from "../../images/thumbnails/vishalthumbnail.jpg";
import ShubhamThumbnail from "../../images/thumbnails/shubhamthumbnail.jpg";
import SreekavyaThumbnail from "../../images/thumbnails/sreekavyathumbnail.jpg";
import placeholder from "../../images/thumbnails/placeholder.png";
import AOS from "aos";
import "aos/dist/aos.css";

const StyledInnerPageContainer = styled(InnerPageContainer)`
  background-color: #fafafa;
`;

const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 1em;
  margin-top: 1em;
  color: #333;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 5em;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 500px;
  min-height: 300px;
  background-color: #fde0e0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  margin: 1.5em;
  margin-bottom: 1.3em;
  border-radius: 10px;
`;

const SectionSubtitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 0.5em;
  margin-top: 1em;
  color: #a50000;
`;

const SectionParagraph = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 18px;
  margin: 1em;
  margin-top: 0;
  margin-bottom: 5em;
  color: #333;
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;

export function AboutPage(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  const teamMembers = [
    {
      thumbnail: EthanThumbnail,
      name: "Ethan Stone",
      role: "Front End Developer",
      email: "ethstone@iu.edu",
    },
    {
      thumbnail: VishalThumbnail,
      name: "Vishal Dung",
      role: "Front End Developer",
      email: "vidung@iu.edu",
    },
    {
      thumbnail: AnkuThumbnail,
      name: "Anku Sharma",
      role: "Front End Developer",
      email: "sharanku@iu.edu",
    },
    {
      thumbnail: ShubhamThumbnail,
      name: "Shubham Singh",      
      role: "Back End Developer",      
      email: "shssingh@iu.edu",    
    }, 
    {     
    thumbnail: SreekavyaThumbnail, 
    name: "Sreekavya Kashamshetty",      
    role: "Back End Developer",      
    email: "skashams@iu.edu",    
    }, 
];

return (
    <PageContainer>
      <Navbar />
      <StyledInnerPageContainer>
        <AboutUsContainer>
          <SectionTitle data-aos="fade-up">About Us</SectionTitle>
          <ContentContainer>
            <SectionContainer data-aos="fade-up" data-aos-delay="100">
              <SectionSubtitle>Who we are</SectionSubtitle>
              <SectionParagraph>
                The B-Town Dash is a delivery management system based in Bloomington, Indiana. We provide efficient and reliable delivery services to individuals and businesses in the Bloomington area.
              </SectionParagraph>
            </SectionContainer>
            <SectionContainer data-aos="fade-up" data-aos-delay="200">
              <SectionSubtitle>Our mission</SectionSubtitle>
              <SectionParagraph>
                Our mission is to provide the best delivery experience possible to our customers. We aim to achieve this by leveraging technology and providing exceptional customer service.
              </SectionParagraph>
            </SectionContainer>
            <SectionContainer data-aos="fade-up" data-aos-delay="300">
              <SectionSubtitle>Why choose us</SectionSubtitle>
              <SectionParagraph>
                At The B-Town Dash, we are committed to providing the most efficient and reliable delivery service in Bloomington. We strive to make the delivery process as seamless as possible for our customers and we are always looking for ways to improve our service.
              </SectionParagraph>
            </SectionContainer>
          </ContentContainer>
          <SectionSubtitle data-aos="fade-up">Meet the Team</SectionSubtitle>
          <TeamContainer>
            {teamMembers.map((member, index) => (
              <TeamMember data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <EmployeeCard member={member} />
              </TeamMember>
            ))}
          </TeamContainer>
        </AboutUsContainer>
      </StyledInnerPageContainer>
      <Footer />
    </PageContainer>
  );
};

export default AboutPage;
