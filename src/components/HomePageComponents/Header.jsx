import logo from "../../images/main-logo.png";
import {
  StyledHederContainer,
  StyledHomeHeader,
  StyledLogo,
  StyledLogoLink,
} from "./HomePage.styled";

export const Header = () => {
  return (
    <StyledHederContainer>
      <StyledHomeHeader>
        <StyledLogoLink to="/">
          <StyledLogo src={logo} alt="rick and morty logo" />
        </StyledLogoLink>
      </StyledHomeHeader>
    </StyledHederContainer>
  );
};
