class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    (this.title = title),
      (this.director = director),
      (this.genre = genre),
      (this.releaseYear = releaseYear),
      (this.rating = rating);
  }
  overview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director}`;
  }
}
const Superman = new Movie('Superman');

function Movie2(title, director, genre, releaseYear, rating) {
  (this.title = title),
    (this.director = director),
    (this.genre = genre),
    (this.releaseYear = releaseYear),
    (this.rating = rating);
}
Movie2.prototype.overview = function () {
  return `${this.title}`;
};
const SpiderMan = new Movie2('spiderman');
console.log(SpiderMan);
console.log(SpiderMan.overview());
