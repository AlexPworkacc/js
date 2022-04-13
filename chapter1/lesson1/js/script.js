"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (this.count == " " || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyMovie: function() {
        for (let i = 0;i < 2; i++) {
            let questionOne = prompt("Один из последних просмотренных фильмов?", ""),
                questionTwo = +prompt("На сколько оцените его?", "");
        
                if (questionOne != null && questionTwo != null && questionOne != " " && questionTwo != " " && questionOne.length < 50) {
                    this.movies[questionOne] = questionTwo;
                    console.log("done")
                } else {
                    console.log("error");
                    i--;
                }
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) { 
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count > 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count > 30) {
            console.log("Вы киноман");
        } else 
            console.log("Произошла ошибка");
    },
    writeYourGenres: function() {
        for(let i = 1; i < 4; i++) {
            const genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genres != null && genres != " ") {
                personalMovieDB.genres[i -1] = genres;
            } else i--;

            this.genres.forEach(function(item, i) {
                console.log(`Любимый жанр №${i} - это ${item}`)
            })
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggelVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
}
personalMovieDB.start();
personalMovieDB.writeYourGenres();

