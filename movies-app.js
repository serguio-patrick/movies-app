"use strict";


const GLITCH = 'https://uneven-organic-meteoroid.glitch.me/movies';
// const POSTER = 'http://img.omdbapi.com/?'+ OMDB_API + '&\n';
// http://www.omdbapi.com/?t=Universal+Soldier%3A+The+Return



function glitchFetch() {
    fetch(GLITCH)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(function (moive){
            $('#cards').append('<article>' +
                '<p>' + moive.title + '</p>' +
                '<p>' + moive.rating + '</p>' +
                '<button className="edit">Edit</button>'
                + '</article>');
        });
        })
        .catch(console.error);
}

glitchFetch();

// data.movies.forEach(function (moive){
// $('#cards').append('<article>' +
//     '<p>' + moive + '</p>'
//     + '</article>');
// });