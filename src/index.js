import { getMovieNames, getMovie, getActors } from "./movie.service";
import { drawInit } from "./draw-functions";

console.log("hello again");

getMovieNames().then(movies => {
    drawInit(document.body, movies);
});


getActors(1).then(result => console.log(result));