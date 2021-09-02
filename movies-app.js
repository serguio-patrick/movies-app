"use strict";


const GLITCH = 'https://uneven-organic-meteoroid.glitch.me/movies';
// const POSTER = 'http://img.omdbapi.com/?'+ OMDB_API + '&\n';
// http://www.omdbapi.com/?t=Universal+Soldier%3A+The+Return


////gets movies
// function glitchFetch() {
//     fetch(GLITCH)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             data.forEach(function (moive) {
//                 $('#cards').append('<article>' +
//                     '<p>' + moive.title + '</p>' +
//                     '<p>' + moive.rating + '</p>' +
//                     '<button class="edit">Edit</button>' +
//                     '<button class="delete">Delete</button>' +
//                     '</article>');
//             });
//         })
//         .catch(console.error);
// }

// // call function
// glitchFetch();


// //adds Movies
// function addMovies(title, rating) {
//     fetch(`${GLITCH}`, {
//         method: 'POST',
//         headers: {
//             'Content-TYpe': 'application/json'
//         },
//         body: JSON.stringify({
//             title: title,
//             rating: rating
//         })
//     }).then(response => response.json())
//        .then(data => {
//             console.log(data)
//            $("article").remove();
//            glitchFetch();
//         })
//         .catch(console.error)
// }

//when clicked add a movie to json obj

// const addMovies = (film) => fetch(`${GLITCH}`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(film)
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(`Success: created ${JSON.stringify(film)}`);
//         return film.id; // to access the primary key of the newly created entity
//     })
//     .catch(console.error)

// $('#addButton').click(function (e) {
//     e.preventDefault();
//     let x = $('#addTitle').val();
//     let y = $('#addRating').val();
//     let mObj = {title: x,rating: y};
//     addMovies(mObj);
//
// });

// $('#addButton').click(function () {
//     addMovies($('#addTitle').val(), $('#addRating').val());
//
// });

// function deleteMovies(id) {
//     fetch(`${GLITCH}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-TYpe': 'application/json'
//         },
//         body: JSON.stringify({
//         })
//     }).then(response => response.json())
//         .then(data => {if(data.id === id) {
//             console.log(data.id)
//             $("article").remove();
//             glitchFetch();
//         }})
//         .catch(console.error)
// }

// $('.delete').click(function () {
//     deleteMovies($(this.data()));
//
// });
//===============


/**
 * Example function to fetch all records
 * @returns {Promise<void>}
 */
const getMovies = () => fetch(GLITCH)
    .then(res => res.json())
    .then(data => {
            console.log(data)
            data.forEach(function (movie) {
                $('#cards').append('<article>' +
                    '<p>' + movie.title + '</p>' +
                    '<p>' + movie.rating + '</p>' +
                    `<button class="edit" data-id="${movie.id}" >Edit</button>'` +
                    `<button class="delete" data-id="${movie.id}" >Delete</button>` +
                    '</article>');
            });
        $('.delete').click(function () {
            console.log('hi')
            var id = $(this).attr("data-id");
            console.log(id);
            $("article").remove();
            deleteMovie(id);

        });

        $('.edit').click(function () {
            console.log('hi')
            var id = $(this).attr("data-id");
            console.log(id);

            // $("article").remove();
            // editMovie(id);

        });


        })
        .catch(console.error);
getMovies();
/**
 * Example function to fetch single dog object by id
 * @param id - the primary key of the api data
 * @returns {Promise<any | void>}
 */
const getMovie = id => fetch(`${GLITCH}/${id}`)
    .then(res => res.json())
    .catch(console.error);
console.log(getMovie)
/**
 * Example function to edit a given dog object
 * @param dog - a dog object with a valid id
 * @returns {Promise<any | void>}
 */
const editMovie = film => fetch(`${GLITCH}/${film.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(film)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: edited ${JSON.stringify(data)}`);
        getMovies();
    })
    .catch(console.error);

/**
 * Example function to delete a dog object by it's id
 * @param id - the primary key of the api data
 * @returns {Promise<any | void>}
 */
const deleteMovie = id => fetch(`${GLITCH}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(() => {
        console.log(`Success: deleted movie with id of ${id}`);
        getMovies();
    })
    .catch(console.error);

/**
 * Example function to create a new dog object
 * @param dog
 * @returns {Promise<any | void>}
 */
const addMovie = (film) => fetch(`${GLITCH}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(film)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: created ${JSON.stringify(data)}`);
        getMovies();
        return data.id; // to access the primary key of the newly created entity
    })
    .catch(console.error);

$('#addButton').click(function (e) {
    // e.preventDefault();
    let x = $('#addTitle').val();
    let y = $('#addRating').val();
    let mObj = {title: x,rating: y};
    addMovie(mObj);


});


// const HOOKBIN = 'https://hookb.in/W1N8ZGelp8CYplzzpDPD';

// loading screen
document.onreadystatechange = function () {
    var state = document.readyState
    if (state === 'interactive') {
        // document.getElementById('contents').style.visibility = "hidden";
    } else if (state === 'complete') {
        setTimeout(function () {
            // document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            // document.getElementById('contents').style.visibility = "visible";
        }, 1000);
    }
}