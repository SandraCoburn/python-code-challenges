function arrayReduceToObject(arr) {
  const transformedArr = arr.map((item) => {
    const { name, price } = item;
    return { name: encodeURI(name.toLowerCase()), id: item.id, price };
  });
  return transformedArr.reduce((acc, item) => {
    acc[item.name.toLowerCase()] = item;
    return acc;
  }, {});
}

const arr = [
  {
    id: 2,
    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    name: 'Blue Beanie',
    price: 18,
    quantity: 1,
  },
];
console.log(arrayReduceToObject(arr));
