import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
const InfoSection = lazy(() => import("./body/InfoSection"));
const Connect = lazy(() => import("./body/Connect"));
const Slider = lazy(() => import("./body/Slider"));

const CollaborativeArticles = lazy(() =>
  import("./body/CollaborativeArticles")
);

const Form = lazy(() => import("../hook/Reducer"));

const LazyLoadComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return <div ref={ref}>{inView ? children : null}</div>;
};

const Body = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadComponent>
          <Form />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Slider />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <CollaborativeArticles />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <InfoSection />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <Connect />
        </LazyLoadComponent>
      </Suspense>
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
