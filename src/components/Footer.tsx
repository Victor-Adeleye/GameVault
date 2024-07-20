import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

const FooterTitle = styled.h4`
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  margin-top: 20px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About GameVault</FooterTitle>
          <p>
            Unlock endless adventures with GameVault and dive into the ultimate
            gaming experience with GameVault.
          </p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <p>Email: support@gamevault.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <p>
            <FooterLink href="https://facebook.com">Facebook</FooterLink> |
            <FooterLink href="https://twitter.com">Twitter</FooterLink> |
            <FooterLink href="https://instagram.com">Instagram</FooterLink>
          </p>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} GameVault. All rights reserved.</p>
        <span>Designed: Victor Adeleye</span>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
