"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
};

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyMovie() {
    for (let i = 0;i < 2; i++) {
        let questionOne = prompt("Один из последних просмотренных фильмов?", ""),
            questionTwo = +prompt("На сколько оцените его?", "");
    
            if (questionOne != null && questionTwo != null && questionOne != " " && questionTwo != " " && questionOne.length < 50) {
                personalMovieDB.movies[questionOne] = questionTwo;
                console.log("done")
            } else {
                console.log("error");
                i--;
            }
    }
}

// rememberMyMovie();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) { 
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else 
        console.log("Произошла ошибка");
}

// detectPersonalLevel();


function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i -1] = genres;
        // do {
        //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i}`);
        // }
        // while (personalMovieDB.genres[i] == "" || personalMovieDB.genres[i] == null)
    }
};

writeYourGenres()

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
};

showMyDB();

