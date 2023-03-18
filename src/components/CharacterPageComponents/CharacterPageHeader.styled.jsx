import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCharacterPageHeader = styled.header`
  padding-top: 21px;
  padding-bottom: 31px;
`;

export const StyledCharacterHeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  gap: 12px;
  align-items: center;

  font-family: "Karla";
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  fill: #000000;
  transition: 250ms var(--timing-function);

  &:focus,
  &:hover {
    color: var(--active-color);
    fill: var(--active-color);
  }
`;

export const BackLinkIcon = styled.svg`
  padding: 4px 0 4px 4px;
`;
