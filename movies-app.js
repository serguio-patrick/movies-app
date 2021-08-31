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
                '<button className="edit">Edit</button>' +
                '<button className="delete">Delete</button>' +
                '</article>');
        });
        })
        .catch(console.error);
}

glitchFetch();



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
            // console.log(data)
            data.forEach(function (movie){
                $('#cards').append('<article>' +
                    '<p>' + movie.title + '</p>' +
                    '<p>' + movie.rating + '</p>' +
                    '<button className="edit">Edit</button>' +
                    '<button className="delete">Delete</button>' +
                    '</article>');
            });
        })
        .catch(console.error)
}

$('#addbutton').click(function () {
    addMovies($('#addtitle').val(), $('#addrating').val());
    // glitchFetch();
});


// const HOOKBIN = 'https://hookb.in/W1N8ZGelp8CYplzzpDPD';




document.onreadystatechange = function () {
    var state = document.readyState
    if (state === 'interactive') {
        document.getElementById('contents').style.visibility="hidden";
    } else if (state === 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            document.getElementById('load').style.visibility="hidden";
            document.getElementById('contents').style.visibility="visible";
        },1000);
    }
}