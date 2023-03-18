import {
  CharacterDescription,
  CharacterImage,
  CharacterSection,
  CharacterTitle,
  CharacterWrap,
  ImageWrap,
  StyledCharacterContainer,
} from "./CharacterInfo.styled";
import { CharacterList } from "./CharacterList";

export const CharacterInfo = ({ character }) => {
  const { name, image } = character;

  return (
    <CharacterSection>
      <StyledCharacterContainer>
        <h1 className="hidden">Character page</h1>
        <CharacterWrap>
          <ImageWrap>
            <CharacterImage src={image} alt="rick and morty logo" />
          </ImageWrap>

          <CharacterTitle>{name}</CharacterTitle>
          <CharacterDescription>Informations</CharacterDescription>

          <CharacterList character={character} />
        </CharacterWrap>
      </StyledCharacterContainer>
    </CharacterSection>
  );
};
