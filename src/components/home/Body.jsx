import React from 'react';
import styled from 'styled-components';
import InfoSection from './body/InfoSection';
import Connect from './body/Connect';
import Slider from './body/Slider';
import CollaborativeArticles from './body/CollaborativeArticles';

const Body = () => {
  return (
    <Container>
      <Slider />
      <CollaborativeArticles />
      <InfoSection />
      <Connect />
    </Container>
  );
};

export default Body;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Jumbotron = styled.div`
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  color: white;
  padding: 50px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
  font-family: 'Arial', sans-serif;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled`
  display: inline-block;
  padding: 15px 30px;
  margin: 0 10px;
  background: ${props => (props.primary ? '#4CAF50' : '#f0ad4e')};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1em;
  font-family: 'Arial', sans-serif;

  &:hover {
    background: ${props => (props.primary ? '#45a049' : '#ec971f')};
  }
`;