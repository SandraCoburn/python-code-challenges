class BookI {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  get Availability() {
    return this.Availability;
  }
  getAvailability() {
    if (this.numCopies === 0) {
      return 'Out of Sotck';
    } else if (this.numCopies < 10) {
      return 'Low Stock';
    }
    return 'In stock';
  }
  sell(numCopiesSold) {
    this.numCopies -= numCopiesSold;
  }
}
////////////////////////////////////

function Book(title, author, ISBN, numCopies) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;
}
Book.prototype.getAvailability = function () {
  if (this.numCopies == 0) {
    return 'Out of Sotck';
  } else if (this.numCopies < 10) {
    return 'Low Stock';
  }
  return 'In stock';
};
Book.prototype.sell = function (numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
};
Book.prototype.restock = function (numCopiesStocked = 5) {
  this.numCopies += numCopiesStocked;
};
const HungerGames = new Book('Hunger Games', 'Suzane C', 1289, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
HungerGames.sell(17);
console.log(HungerGames.getAvailability());
