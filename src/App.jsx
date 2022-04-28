import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import styles from "./components/App.module.css";
import { LandingPage } from "./page/LandingPage";
import { MovieDetails } from "./page/MovieDetails";

export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Discovery Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/"></Navigate>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
