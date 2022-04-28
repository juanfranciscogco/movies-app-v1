import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import React, { useEffect, useState } from "react";
import { getRequest } from "../utils/httpClient";
import { Spinner } from "./Spinner";
// import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]); // movies = []
  const [isLoading, setIsLoading] = useState(true); // isLoading = true
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // const location = useLocation();
  // console.log(location.search);

  // const query = useQuery();
  // const search = query.get("search");
  // console.log(search);

  // luego se ejecuta el llamado a la API
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    getRequest(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages); // si la oagina actual es menor del total de paguinas
      setIsLoading(false);
    });
  }, [search, page]); // hay que passarle un arreglo de dependencias [] significa que se ejecuta una sola vez


  if (!isLoading && movies.length === 0) {
    return <Empty />
  }
  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    // primero se ejecuta el returno
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)} // setPage((prevPage) => prevPage + 1) prevPag es el primer elemento del estado anterior
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
