import styled from "styled-components";

export const LoadMoreContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-bottom: 144px;
`;

export const LoadMoreButton = styled.button`
  font-family: "Roboto";
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;

  color: var(--home-card-secondary);
  background-color: transparent;
  outline: transparent;
  border-color: transparent;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: color 250ms var(--timing-function);
  cursor: pointer;

  &:focus,
  &:hover {
    color: var(--active-color);
  }
`;
