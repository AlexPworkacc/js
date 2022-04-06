"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

if (personalMovieDB.count < 10) { 
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else 
    console.log("Произошла ошибка");

for (let i = 0;i < 2; i++) {
    let questionOne = prompt("Один из последних просмотренных фильмов?", ""),
        questionTwo = +prompt("На сколько оцените его?", "");

    if  (!questionOne || questionOne.length > 50 || questionOne == "") {
        questionOne = prompt("Один из последних просмотренных фильмов?", "");
    } 
    if  (!questionTwo || questionOne.length > 50 || questionTwo == "") {
        questionTwo = prompt("На сколько оцените его?", "");
    } 

        personalMovieDB.movies[questionOne] = questionTwo;
}

console.log(personalMovieDB);

