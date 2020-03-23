import { Actor } from "./actor.js";

export class Movie
{
    constructor(id, name, genre = none, year = none)
    {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.year = year;
    }
}