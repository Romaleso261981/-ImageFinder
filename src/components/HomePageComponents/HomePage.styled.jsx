import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHederContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1020px;
  }
`;

export const StyledHomeHeader = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 480px) {
    padding-top: 44px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 86px;
  }
`;

export const StyledLogoLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const StyledLogo = styled.img`
  width: 400px;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;
