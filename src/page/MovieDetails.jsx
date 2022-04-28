import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { getRequest } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams(); // valor
  // const movieId = useParams(); // objeto
  // console.log(movieId);

  const [isLoading, setIsLoading] = useState(true); // isLoading = true
  const [movie, setMovie] = useState(null); // movie = null

  useEffect(() =>{
    setIsLoading(true);
    getRequest("/movie/" + movieId).then(data => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]); // si se cambie el movieId entonces se vuelve a ejecutar el efecto

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  
  const imageUrl = getMovieImg(movie.poster_path, 300);
  // const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(" ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
