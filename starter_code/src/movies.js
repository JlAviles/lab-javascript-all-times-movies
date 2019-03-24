/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (movies) {

  var newMovies = movies.map(film => {
    var copy = {...film};

    copy.duration = film.duration.split(" ");
    hora = copy.duration[0].substring(0,copy.duration[0].length - 1) * 60
    minutos = copy.duration[1].substring(0,copy.duration[1].length - 3)
    copy.duration = (parseInt(hora) + parseInt(minutos)) + " minutes";
    return copy
  }) 
  return newMovies
};

// Get the average of all rates with 2 decimals 
function ratesAverage () {

}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
