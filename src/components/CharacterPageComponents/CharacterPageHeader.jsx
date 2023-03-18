import {
  StyledCharacterPageHeader,
  StyledCharacterHeaderContainer,
  BackLink,
  BackLinkIcon,
} from "./CharacterPageHeader.styled";

export const CharacterPageHeader = ({ backLinkHref }) => {
  return (
    <StyledCharacterPageHeader>
      <StyledCharacterHeaderContainer>
        <BackLink to={backLinkHref}>
          <BackLinkIcon viewBox="0 0 32 32" width="16" height="16">
            <path d="M32 14H7.66L18.84 2.82 16 0 0 16l16 16 2.82-2.82L7.66 18H32v-4z" />
          </BackLinkIcon>
          GO BACK
        </BackLink>
      </StyledCharacterHeaderContainer>
    </StyledCharacterPageHeader>
  );
};
