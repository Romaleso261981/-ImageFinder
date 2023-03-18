import { StyledHederContainer } from "../HomePageComponents/HomePage.styled";
import { FilterButton, StyledForm, StyledInput } from "./Filter.styled";

export const Filter = ({ onSubmit }) => {
  return (
    <StyledHederContainer>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="filter"></label>
        <StyledInput
          id="filter"
          type="text"
          name="filter"
          autoComplete="off"
          placeholder="Filter by name..."
        />
        <FilterButton type="submit">
          <svg
            className="filter-icon"
            viewBox="0 0 32 32"
            width="16"
            height="16"
          >
            <path d="M22.222 19.556h-1.404l-0.498-0.48c1.742-2.027 2.791-4.658 2.791-7.52 0-6.382-5.173-11.556-11.556-11.556s-11.556 5.173-11.556 11.556c0 6.382 5.173 11.556 11.556 11.556 2.862 0 5.493-1.049 7.52-2.791l0.48 0.498v1.404l8.889 8.871 2.649-2.649-8.871-8.889zM11.556 19.556c-4.427 0-8-3.573-8-8s3.573-8 8-8c4.427 0 8 3.573 8 8s-3.573 8-8 8z"></path>
          </svg>
        </FilterButton>
      </StyledForm>
    </StyledHederContainer>
  );
};
