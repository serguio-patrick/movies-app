"use strict";


const GLITCH = 'https://uneven-organic-meteoroid.glitch.me/movies';
// const POSTER = 'http://img.omdbapi.com/?'+ OMDB_API + '&\n';
// http://www.omdbapi.com/?t=Universal+Soldier%3A+The+Return


//gets movies
function glitchFetch() {
    fetch(GLITCH)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(function (moive) {
                $('#cards').append('<article>' +
                    '<p>' + moive.title + '</p>' +
                    '<p>' + moive.rating + '</p>' +
                    '<button class="edit">Edit</button>' +
                    '<button class="delete">Delete</button>' +
                    '</article>');
            });
        })
        .catch(console.error);
}

// call function
glitchFetch();


//adds Movies
function addMovies(title, rating) {
    fetch(GLITCH, {
        method: 'POST',
        headers: {
            'Content-TYpe': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            rating: rating
        })
    }).then(response => response.json())
       .then(data => {
            console.log(data)
           $("article").remove();
           glitchFetch();
            // data.forEach(function (movie) {
            //     $('#cards').append('<article>' +
            //         '<p>' + movie.title + '</p>' +
            //         '<p>' + movie.rating + '</p>' +
            //         '<button class="edit">Edit</button>' +
            //         '<button class="delete">Delete</button>' +
            //         '</article>');
            // });
        })
        .catch(console.error)
}

function deleteMovies() {
    fetch(GLITCH, {
        method: 'DELETE',
        headers: {
            'Content-TYpe': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data)
            $("article").remove();
            glitchFetch();
            // data.forEach(function (movie) {
            //     $('#cards').append('<article>' +
            //         '<p>' + movie.title + '</p>' +
            //         '<p>' + movie.rating + '</p>' +
            //         '<button class="edit">Edit</button>' +
            //         '<button class="delete">Delete</button>' +
            //         '</article>');
            // });
        })
        .catch(console.error)
}

//when clicked add a movie to json obj
$('#addbutton').click(function () {
    addMovies($('#addtitle').val(), $('#addrating').val());

});

$('.delete').click(function () {
    deleteMovies($(this));

});


// const HOOKBIN = 'https://hookb.in/W1N8ZGelp8CYplzzpDPD';

// loading screen
document.onreadystatechange = function () {
    var state = document.readyState
    if (state === 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state === 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('contents').style.visibility = "visible";
        }, 1000);
    }
}