// Guessing game
// User enter a number
// system picks a random number from 1 to 6
// if user number is equal to random number, user get 2 points
// if user number is different form random number by 1
// give the user 1 point otherwise give the user 0 points
// user can decide to play the game as long as they want

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt('Enter a number from 1 to 6'));
    const randomNumber = Math.floor(Math.random() * 6 * 1);
    if (isNaN(userNumber)) {
      reject(new Error('Wrong input type'));
    }
    if (userNumber === randomNumber) {
      resolve({
        points: 2,
        randomNumber,
      });
    } else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) {
      resolve({
        points: 1,
        randomNumber,
      });
    } else {
      resolve({
        points: 0,
        randomNumber,
      });
    }
  });
};
const continueGame = () => {
  return new Promise((resolve, reject) => {
    if (window.confirm('Do you wish to continue?')) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
const handlGuess = () => {
  enterNumber()
    .then((result) => {
      alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);
      continueGame().then((result) => {
        if (result === 2) {
          handleGuess();
        } else {
          alert('Game ends');
        }
      });
    })
    .catch((error) => alert(error));
};

const start = () => {
  handleGuess();
};

start();
