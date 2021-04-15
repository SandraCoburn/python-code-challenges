/**
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
 *  Help him figure out the minimum number of additional statues needed.
 * @param {} statues
 * @returns missing numbers.lenght
 */

function makeArrayConsecutive2(statues) {
  //sort array
  //Loop array
  let missingNumbers = 0;

  statues.sort();
  let current = 0;
  console.log('statues', statues);
  for (let i = 1; i < statues.length; i++) {
    //chech that second name minus first is one if it is go to next if not add one to missingNumbers
    current = statues[i];
    if (current - statues[i - 1] === 1) {
      current = current + 1;
    } else {
      missingNumbers = missingNumbers + current - statues[i - 1] - 1;
    }
  }

  return missingNumbers;
}
let statues = [6, 2, 3, 8];
console.log(makeArrayConsecutive2(statues));
