import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  deleteApplicant,
  fetchApplicants,
} from "../store/features/applicant/applicantSlice";
import SkeletonLoader from "../components/loading/Skeleton";

const Applicant = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.applicants);
  const status = useSelector((state) => state.applicants.status);
  const error = useSelector((state) => state.applicants.error);

  const handleDelete = (id) => {
    dispatch(deleteApplicant(id));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchApplicants());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <SkeletonLoader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="container">
      <div className="row">
        {data.length &&
          data.map((article, index) => (
            <ArticleCard className="col-xl-3 col-md-1" key={index}>
              <Title>{article.title}</Title>
              <Author>By {article.author}</Author>
              <Detail>Source: {article.source.name}</Detail>
              <Detail>
                Published at: {new Date(article.publishedAt).toLocaleString()}
              </Detail>
              <Image src={article.urlToImage} alt={article.title} />
              <Detail>{article.description}</Detail>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <Button>Read more</Button>
              </a>
              <div>
                <Button onClick={() => handleDelete(index)}>Delete</Button>
              </div>
            </ArticleCard>
          ))}
      </div>
    </Container>
  );
};

export default Applicant;

const Container = styled.div`
  padding: 20px;
`;

const ArticleCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const Detail = styled.p`
  margin: 5px 0;
  color: #666;
`;

const Author = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
