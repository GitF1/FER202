import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`;

const Container = styled.div`
  padding: 20px;
`;

const SkeletonCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const SkeletonTitle = styled.div`
  width: 70%;
  height: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonAuthor = styled.div`
  width: 50%;
  height: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonDetail = styled.div`
  width: 90%;
  height: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonButton = styled.div`
  width: 30%;
  height: 40px;
  border-radius: 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonLoader = () => {
  return (
    <Container>
      <SkeletonCard>
        <SkeletonTitle />
        <SkeletonAuthor />
        <SkeletonDetail />
        <SkeletonImage />
        <SkeletonDetail />
        <SkeletonDetail />
        <SkeletonButton />
      </SkeletonCard>
      <SkeletonCard>
        <SkeletonTitle />
        <SkeletonAuthor />
        <SkeletonDetail />
        <SkeletonImage />
        <SkeletonDetail />
        <SkeletonDetail />
        <SkeletonButton />
      </SkeletonCard>
      <SkeletonCard>
        <SkeletonTitle />
        <SkeletonAuthor />
        <SkeletonDetail />
        <SkeletonImage />
        <SkeletonDetail />
        <SkeletonDetail />
        <SkeletonButton />
      </SkeletonCard>
    </Container>
  );
};

export default SkeletonLoader;
