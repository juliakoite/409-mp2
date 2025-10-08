import React from "react";
import "../styles/details.css";

interface MovieDetailsProps {
  title: string;
  overview: string;
  releaseDate: string;
  posterPath: string;
}

export default function MovieDetails({
  title,
  overview,
  releaseDate,
  posterPath,
}: MovieDetailsProps): React.ReactElement {
  const e = React.createElement;

  return e(
    "div",
    { className: "movie-details" },
    e("img", {
      className: "movie-poster",
      src: `https://image.tmdb.org/t/p/w300${posterPath}`,
      alt: title,
    }),
    e(
      "div",
      { className: "movie-info" },
      e("h2", { className: "movie-title" }, title),
      e("p", { className: "movie-date" }, `Release Date: ${releaseDate}`),
      e("p", { className: "movie-overview" }, overview)
    )
  );
}