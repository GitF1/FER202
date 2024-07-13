// src/CollaborativeArticles.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  background-color: #fff;
`;

const Heading = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.button`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0073b1;
    color: #fff;
    border-color: #0073b1;
  }
`;

const CollaborativeArticles = () => {
  const tags = [
    "Marketing",
    "Public Administration",
    "Healthcare",
    "Engineering",
    "IT Services",
    "Sustainability",
    "Business Administration",
    "Telecommunications",
    "HR Management",
  ];

  return (
    <Container>
      <Heading>Explore collaborative articles</Heading>
      <SubHeading>
        We’re unlocking community knowledge in a new way. Experts add insights
        directly into each article, started with the help of AI.
      </SubHeading>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    </Container>
  );
};

export default CollaborativeArticles;
