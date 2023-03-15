import styles from './MoviesList.module.css';
import { Btn } from '../Buttons/Btn';

function MoviesList({ children, page, setPage, data, sortedItems }) {
  const loadMore = () => {
    page += 1;
    setPage(page);
  };
  console.log(!sortedItems.length === 0);
  return (
    <>
      <ul className={styles.movieList}>{children}</ul>
      <div className={styles.btnWrapper}>
        {sortedItems.length !== 0 ? (
          <Btn text="load more" onClick={loadMore} />
        ): (<h1>немає збігів за вашим запитом</h1>)}
      </div>
    </>
  );
}

export default MoviesList;
