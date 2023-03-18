import {
  FeaturesList,
  FeaturesItem,
  FeaturesTitle,
  FeaturesSubtitle,
} from "./CharacterList.styled";

export const CharacterList = ({ character }) => {
  const { gender, status, species, origin, type } = character;

  return (
    <FeaturesList>
      <FeaturesItem>
        <FeaturesTitle>Gender</FeaturesTitle>
        <FeaturesSubtitle>{gender}</FeaturesSubtitle>
      </FeaturesItem>
      <FeaturesItem>
        <FeaturesTitle>Status</FeaturesTitle>
        <FeaturesSubtitle>{status}</FeaturesSubtitle>
      </FeaturesItem>
      <FeaturesItem>
        <FeaturesTitle>Specie</FeaturesTitle>
        <FeaturesSubtitle>{species}</FeaturesSubtitle>
      </FeaturesItem>
      <FeaturesItem>
        <FeaturesTitle>Origin</FeaturesTitle>
        <FeaturesSubtitle>{origin.name}</FeaturesSubtitle>
      </FeaturesItem>
      <FeaturesItem>
        <FeaturesTitle>Type</FeaturesTitle>
        <FeaturesSubtitle>{type || "unknown"}</FeaturesSubtitle>
      </FeaturesItem>
    </FeaturesList>
  );
};
