import React from "react";
import styled from "styled-components";
import InfoSection from "./body/InfoSection";
import Connect from "./body/Connect";
import Slider from "./body/Slider";
import CollaborativeArticles from "./body/CollaborativeArticles";
import Form from "../hook/Reducer";

const Body = () => {
  return (
    <Container>
      <Form />
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
