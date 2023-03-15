import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BackBtn } from '../../BackBtn';
import * as API from '../../../services/API';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const movieId = useParams().movieId;

  useEffect(() => {
    API.getMovieById(movieId).then(setData);
  }, []);

  return (
    data && (
      <>
        <BackBtn className={styles.goBack}>Go back</BackBtn>
        <div className={styles.movieDetails}>
          <div>
            <img className={styles.img} src={`${data.image}`} alt="" />
          </div>
          <div className={styles.descMovie}>
            <h2>created: {data.created}</h2>
            <h2>name: {data.name}</h2>
            <h3>Genres: {data.name}</h3>
          </div>
        </div>
        <Outlet />
      </>
    )
  );
}

export default MovieDetailsPage;
