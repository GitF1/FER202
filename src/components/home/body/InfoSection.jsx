import React from 'react';
import styled, { keyframes } from 'styled-components';

const SectionContainer = styled.section`
  margin-top: 10px;
    display: flex;
    background-color: #f5f5f5;
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #d5e0ef;
    box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const Heading = styled.h2`
  color: #a04b2c;
  font-size: 24px;
`;

const SubHeading = styled.p`
  color: #333;
  font-size: 20px;
  margin-top: 10px;
`;

const ButtonList = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #eee;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #1f93d1;
    color:#fff;
    transform: scale(1.02);
  }
`;
const scaleAnimation = keyframes`
  0%, 100% {
    transform: translateX(230px) scale(1.3);
  }
  50% {
    transform: translateX(230px) scale(1.5);
  }
`;

const ImageContent = styled.div`
  flex: 1;
  background-image: url(https://wallpapercave.com/wp/wp2047016.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  transform: translateX(230px) scale(1.3);
  animation: ${scaleAnimation} 8s infinite;
`;


const InfoSection = () => {
  return (
    <SectionContainer>
      <TextContent>
        <Heading>Who is LinkedIn for?</Heading>
        <SubHeading>Anyone looking to navigate their professional life.</SubHeading>
        <ButtonList>
          <Button>Find a coworker or classmate</Button>
          <Button>Find a new job</Button>
          <Button>Find a course or training</Button>
        </ButtonList>
      </TextContent>
      <ImageContent />
    </SectionContainer>
  );
};

export default InfoSection;
