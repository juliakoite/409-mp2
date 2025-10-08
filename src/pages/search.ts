import * as React from "react";
import { useState } from "react";
import { searchmovies } from "../api/tmdb";
import Card from "../components/card";
import "../styles/search.css";

export default function Search(): React.ReactElement {
  const e = React.createElement;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value);
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const movies = await searchmovies(query);
    setResults(movies);
    setLoading(false);
  };

  return e(
    "div",
    { className: "search-page" },
    e("h1", { className: "search-title" }, "Search Movies"),
    e("div", { className: "search-bar" },
      e("input", {
        className: "search-input",
        type: "text",
        value: query,
        onChange: handleInput,
        placeholder: "Enter a movie title..."
      }),
      e("button", { className: "search-button", onClick: handleSearch }, "Search")
    ),
    loading
      ? e("p", { className: "loading" }, "Loading...")
      : e(
          "div",
          { className: "card-container" },
          results.map((m, i) =>
            e(Card, {
              key: i,
              title: m.title,
              posterPath: m.poster_path,
              releaseDate: m.release_date
            })
          )
        )
  );
}