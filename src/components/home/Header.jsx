import React from 'react';
import styled from 'styled-components';
import { AiOutlineFileText, AiOutlineUser, AiOutlineLaptop, AiOutlineAppstore, AiOutlineMobile } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #0077b5;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
  color: #555;
  font-size: 14px;

  & svg {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }
`;

const JoinButton = styled(Button)`
  margin-right: 10px;
  background-color: white;
  border: 1px solid #0077b5;
  color: #0077b5;
  border-radius: 10px;
  padding: 10px 20px;

  @media (max-width: 768px) {
    margin: 5px;
  }
`;

const SignInButton = styled(Button)`
  background-color: #86cff5;
  border: 1px solid #0077b5;
  border-radius: 10px;
  padding: 10px 20px;

  @media (max-width: 768px) {
    margin: 5px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>LinkedIn</Logo>
      <Nav>
        <NavItem><AiOutlineFileText /> Articles</NavItem>
        <NavItem><AiOutlineUser /> People</NavItem>
        <NavItem><AiOutlineLaptop /> Learning</NavItem>
        <NavItem><AiOutlineAppstore /> Jobs</NavItem>
        <NavItem><AiOutlineMobile /> Get the app</NavItem>
      </Nav>
      <AuthButtons>
        <JoinButton variant="outline-primary">Join now</JoinButton>
        <SignInButton>Sign in</SignInButton>
      </AuthButtons>
    </HeaderContainer>
  );
};

export default Header;
