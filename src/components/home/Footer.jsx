// src/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin-bottom: 5px;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Logo>
          <LogoImage src="https://static.vecteezy.com/system/resources/previews/021/460/490/original/linkedin-logo-free-download-free-png.png" alt="LinkedIn Logo" />
        </Logo>
      </Column>
      <Column>
        <Title>General</Title>
        <Link href="#">Sign Up</Link>
        <Link href="#">Help Center</Link>
        <Link href="#">About</Link>
        <Link href="#">Press</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Developers</Link>
      </Column>
      <Column>
        <Title>Browse LinkedIn</Title>
        <Link href="#">Learning</Link>
        <Link href="#">Jobs</Link>
        <Link href="#">Games</Link>
        <Link href="#">Salary</Link>
        <Link href="#">Mobile</Link>
        <Link href="#">Services</Link>
        <Link href="#">Products</Link>
        <Link href="#">Top Companies Hub</Link>
      </Column>
      <Column>
        <Title>Business Solutions</Title>
        <Link href="#">Talent</Link>
        <Link href="#">Marketing</Link>
        <Link href="#">Sales</Link>
        <Link href="#">Learning</Link>
      </Column>
      <Column>
        <Title>Directories</Title>
        <Link href="#">Members</Link>
        <Link href="#">Jobs</Link>
        <Link href="#">Companies</Link>
        <Link href="#">Featured</Link>
        <Link href="#">Learning</Link>
        <Link href="#">Posts</Link>
        <Link href="#">Articles</Link>
        <Link href="#">Schools</Link>
        <Link href="#">News</Link>
        <Link href="#">News Letters</Link>
        <Link href="#">Services</Link>
        <Link href="#">Products</Link>
        <Link href="#">Advice</Link>
        <Link href="#">People Search</Link>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
