import React from 'react';
import styled, { keyframes } from 'styled-components';



const Connect = () => {
  return (
    <SectionContainer>
      <ContentBox>
        <Image style={{ backgroundImage: 'url(https://static.licdn.com/aero-v1/sc/h/b1fxwht7hdbeusleja7ciftsj)' }} />
        <Heading>Connect with people who can help</Heading>
        <Button>Find people you know</Button>
      </ContentBox>
      <ContentBox>
        <Image style={{ backgroundImage: 'url(https://static.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv)' }} />
        <Heading>Learn the skills you need to succeed</Heading>
        <SelectButton>
          <option>Choose a topic to learn about</option>
          <option>Topic 1</option>
          <option>Topic 2</option>
        </SelectButton>
      </ContentBox>
    </SectionContainer>
  );
};

export default Connect;


const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const imageAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background-color: #ffffff;
  animation: ${slideInAnimation} 1s ease-out forwards;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
  margin: 20px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Image = styled.div`
  width: 240px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-bottom: 20px;
  transition: all 0.2s linear;
  animation: ${imageAnimation} 1s ease-out forwards;

  @media (max-width: 768px) {
    width: 180px;
    height: 150px;
  }
`;

const Heading = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #0077b5;
  background-color: white;
  color: #0077b5;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #eef3f8;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const SelectButton = styled.select`
  padding: 10px 20px;
  border: 1px solid #0077b5;
  background-color: white;
  color: #0077b5;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #eef3f8;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;