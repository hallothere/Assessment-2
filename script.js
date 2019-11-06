
//1.
function createMovie(title, duration, quote) {
    this.title = title;
    this.duration = duration;
    this.quote = quote;
    this.isLongerThan = function(movie) {
        if (movie.duration < this.duration) {
            return true;
            } else {
            return false;
            }    
        };   
    this.logQuote = () => console.log(quote);                             
};


//2.
// building the new objects
var starWars = new createMovie('Star Wars', 121, 'If there\'s a bright center to the universe, you\'re on the planet that it\'s farthest from.');
var pulpFiction = new createMovie('Pulp Fiction', 154, 'Do you know what they call a Quarter Pounder with Cheese in France?');
var dirtyDancing = new createMovie('Dirty Dancing', 100, 'Nobody puts Baby in a corner.');
var forrestGump = new createMovie('Forrest Gump', 142, 'Life is like a box of chocolates.');
var theWizzardOfOz = new createMovie('The Wizard of Oz', 101, 'Lions and tigers and bears, oh my!');
var cabaret = new createMovie('Cabaret', 124, 'Life is a cabaret, old chum, so come to the cabaret.');

starWars.logQuote();
console.log(pulpFiction.isLongerThan(starWars));

//building the movies array
var movies = [starWars, pulpFiction, dirtyDancing, forrestGump, theWizzardOfOz, cabaret];


//3.
function getMovieByTitle(string) {
    for (var i = 0; i < movies.length; i++) {
        if (string === movies[i].title) {
        return movies[i];
        }
    }
};


function getAverageDuration() {
    var array = movies.map(x => x.duration);
    const getSum = (total, cur) => total + cur;
    var sum = array.reduce(getSum);
    return sum / movies.length;
};



//another option

function getAverageDuration2() {
    var sum2 = 0;
    for (var i = 0; i < movies.length; i++) {
        sum2 += movies[i].duration;
    }
    return sum2 / movies.length;
};


