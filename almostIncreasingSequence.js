/**
 * Given a sequence of integers as an array,
 * determine whether it is possible to obtain a strictly increasing sequence by
 * removing no more than one element from the array.
 */

function almostIncreasingSequence(sequence) {
  if (isIncreasing(sequence)) {
    return true;
  }
  for (let i = 0; i < sequence.length > 0; i++) {
    var tempSeq = sequence.slice(0); // copy array
    tempSeq.splice(i, 1);
    if (isIncreasing(tempSeq)) {
      return true;
    }
  }
  return false;
}

function isIncreasing(seq) {
  for (let i = 0; i < seq.length - 1; i++) {
    if (seq[i] >= seq[i + 1]) {
      return false;
    }
  }
  return true;
}

//is not almost increasing if there is more than one number which is smaller than it's previous number:
function almostIncreasingSequence2(sequence) {
  var found = 0;
  sequence.forEach((el, index) => {
    var next = sequence[index + 1] || Infinity;
    if (el >= next) {
      found++;
    }
  });
  return found <= 1;
}
