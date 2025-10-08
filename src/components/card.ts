import React from "react";
//import {getImageURL} from "..utils/imageHelpers";
import "../styles/card.css"

interface CardProps {
    title: string;
    posterPath: string;
    releaseDate: string;
    onClick?: () => void;
}
//import type {Movie} from "../api/tmdb";

// interface MovieCardProps {
//     movie: Movie; 
// }

export default function Card({
    title, 
    posterPath,
    releaseDate,
    onClick,

    }: CardProps): React.ReactElement{
    const element = React.createElement;

    return element(
        "div",
        { 
            className: "card", onClick
        },
        element("img", {
            className: "movie-poster",
            src: `https://image.tmdb.org/t/p/w300${posterPath}`,
            alt: title,
        }),
        element("div", {className: "movie-info" },
            element("h3", { className: "movie-title" }, title),
      element("p", { className: "movie-date" }, releaseDate)
        )
    )
}