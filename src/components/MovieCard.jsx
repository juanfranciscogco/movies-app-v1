import styles from "./MovieCard.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
// import placeholder from "../placeholder.jpg";

export function MovieCard({ movie }) {
  // console.log(styles);
  const imageUrl = getMovieImg(movie.poster_path, 300);
  // const imageUrl = movie.poster_path
  //   ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
  //   : placeholder;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
