import styled from "styled-components";
import { StyledCharacterHeaderContainer } from "./CharacterPageHeader.styled";

export const CharacterSection = styled.section`
  padding-bottom: 142px;
`;

export const StyledCharacterContainer = styled(StyledCharacterHeaderContainer)`
  display: flex;
  justify-content: center;
`;

export const CharacterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrap = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
  width: 240px;
  border-radius: 50%;
  border: 5px solid rgba(33, 33, 33, 0.08);

  @media screen and (min-width: 480px) {
    width: 300px;
  }
`;

export const CharacterImage = styled.img`
  width: 240px;

  @media screen and (min-width: 480px) {
    width: 300px;
  }
`;

export const CharacterTitle = styled.h1`
  text-align: center;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 48px;

  color: var(--char-primary-color);
`;

export const CharacterDescription = styled.p`
  margin: 48px 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.15px;

  color: var(--char-secondary-color);
`;
