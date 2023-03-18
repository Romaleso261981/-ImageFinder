import styled from "styled-components";

export const FeaturesList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FeaturesItem = styled.li`
  padding: 9px 16px 12px 16px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
`;

export const FeaturesTitle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;

  color: var(--char-primary-color);
`;

export const FeaturesSubtitle = styled.p`
  font-family: "Roboto";
  line-height: 1.43;
  letter-spacing: 0.25px;

  color: var(--char-features-color);
`;
