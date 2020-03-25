import { getMovie, getActors } from "./movie.service";

export function drawInit(host, data) {
    const mainDiv = host.appendChild(document.createElement("div"));
    mainDiv.classList.add("main");
    data.forEach(el => {
        const div = mainDiv.appendChild(document.createElement("div"));
        div.classList.add("movie");

        const p = div.appendChild(document.createElement("div"));
        p.innerHTML = el.name;
        p.classList = "movie-name";

        const hidden = div.appendChild(document.createElement("input"));
        hidden.type = "hidden";
        hidden.value = el.id;

        const button = div.appendChild(document.createElement("button"));
        button.classList.add("expand-details");

        const content = div.appendChild(document.createElement("div"));
        content.classList.add("movie-content");

        button.onclick = async function() {
            if (button.innerHTML == "▼") {
                content.classList.remove("hidden-div");
                button.innerHTML = "▲";
                const movie = await getMovie(
                    button.parentNode.querySelector("input[type=hidden]").value
                ); /*.then(movie => {
                    drawMovieDetails(
                        button.parentNode.querySelector(".content"),
                        movie
                    );
                });*/

                const actors = await getActors(
                    button.parentNode.querySelector("input[type=hidden]").value
                ); /*.then(actors => {
                    drawMovieActors(
                        button.parentNode.querySelector(".content"),
                        actors
                    );
                });*/
                drawMovieDetails(
                    button.parentNode.querySelector(".movie-content"),
                    movie
                );
                drawMovieActors(
                    button.parentNode.querySelector(".movie-details"),
                    actors
                );
            } else {
                content.classList.add("hidden-div");
                content.innerHTML = "";
                button.innerHTML = "▼";
            }
        };
        button.innerHTML = "▼";
    });
}

function drawMovieDetails(host, movieDetails) {
    const div = host.appendChild(document.createElement("div"));
    div.classList.add("movie-details");

    let p = div
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("p"));
    p.innerHTML = `<b>Genre:</b> ${movieDetails.genre.join(", ")}`;
    p.classList.add("genre");

    p = div.appendChild(document.createElement("div")).appendChild(document.createElement("p"));
    p.innerHTML = `<b>Year:</b> ${movieDetails.year}`;
    p.classList.add("year");
}

function drawMovieActors(host, actors) {
    const div = host.appendChild(document.createElement("div"));
    div.classList.add("movie-actors");

    const p = div.appendChild(document.createElement("p"));
    p.innerHTML = `<b>Actors:</b> ${actors.join(", ")}`;
    p.classList.add("actors");
}
