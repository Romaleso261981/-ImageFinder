import styled from "styled-components";
import { StyledHederContainer } from "./HomePage.styled";

export const StyledHomeSection = styled.section`
  padding-top: 61px;
  padding-bottom: 44px;
`;

export const StyledHomeContainer = styled(StyledHederContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledList = styled.ul`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 20px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const StyledItem = styled.li`
  overflow: hidden;
  width: 300px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: scale 250ms var(--timing-function);

  &:hover {
    scale: 1.05;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const StyledItemImage = styled.img`
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const StyledItemWrap = styled.div`
  padding: 12px 16px;
`;

export const StyledItemTitle = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;

  color: var(--home-card-main);
`;

export const StyledItemDescription = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;

  color: var(--home-card-secondary);
`;
