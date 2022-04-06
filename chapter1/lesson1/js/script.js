let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}
let questionOne = prompt("Один из последних просмотренных фильмов?", "");
let questionTwo = +prompt("На сколько оцените его?", "");
let questionThree = prompt("Один из последних просмотренных фильмов?", "");
let questionFour = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFour;

console.log(personalMovieDB);

