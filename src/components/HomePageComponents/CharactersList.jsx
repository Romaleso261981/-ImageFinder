import { Link, useLocation } from "react-router-dom";
import {
  StyledHomeContainer,
  StyledHomeSection,
  StyledItem,
  StyledItemDescription,
  StyledItemImage,
  StyledItemTitle,
  StyledItemWrap,
  StyledList,
} from "./CharactersList.styled";

export const CharactersList = ({ characters }) => {
  const location = useLocation();

  return (
    <StyledHomeSection>
      <StyledHomeContainer>
        <h1 className="hidden">Rick and Morty application</h1>
        <StyledList>
          {characters.map(({ id, name, species, image }) => (
            <StyledItem key={id}>
              <Link to={`character/${id}`} state={{ from: location }}>
                <StyledItemImage src={image} alt="rick and morty logo" />
                <StyledItemWrap>
                  <StyledItemTitle>{name}</StyledItemTitle>
                  <StyledItemDescription>{species}</StyledItemDescription>
                </StyledItemWrap>
              </Link>
            </StyledItem>
          ))}
        </StyledList>
      </StyledHomeContainer>
    </StyledHomeSection>
  );
};
