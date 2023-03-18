import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 48px;
  border: 1px solid var(--input-color);
  border-radius: 8px;

  font-family: "Roboto";
  font-size: 16px;
  line-height: 1.5;

  color: var(--input-color);
  transition: border-color 250ms var(--timing-function);

  &:focus,
  &:hover {
    border-color: var(--active-color);
    outline: transparent;
  }
`;

export const FilterButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 4px;
  display: flex;

  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  fill: var(--input-color);
  transition: fill 250ms var(--timing-function);

  &:focus,
  &:hover {
    outline: transparent;
    fill: var(--active-color);
  }
`;
