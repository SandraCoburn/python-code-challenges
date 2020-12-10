const onMyBday = (isJSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isJSick) {
        resolve(2);
      } else {
        reject(new Error('I am sad'));
      }
    }, 2000);
  });
};
console.time('timer');
onMyBday(false)
  .then((result) => {
    console.timeLog('timer');
    console.log(`I have ${result} cakes`);
  })
  .catch((error) => {
    console.timeLog('timer');
    console.log(error);
  })
  .finally(() => {
    console.log('party');
  });
