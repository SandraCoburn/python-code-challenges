const vowelCount = (str) => {
  //replace anything that isn't a vowel with an empty string and return the new string lenght
  return str.replace(/[^aeiou]/gi, '').length;
};
console.log(vowelCount('Hello Wordl'));

const vowel_count = (str) => {
  let count = [...str].filter((chr) =>
    'aeiou'.includes(chr.toLowerCase())
  ).length;
  return count;
};
console.log(vowel_count('foo BAR bax quiz'));
