import { LoadMoreButton } from "./ButtonLoadMore.styled";

export const ButtonLoadMore = ({ loadMore, buttonName }) => {
  return (
    <LoadMoreButton onClick={loadMore} type="button">
      {buttonName}
    </LoadMoreButton>
  );
};
