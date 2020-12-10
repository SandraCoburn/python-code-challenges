// using https://restcountries.eu/ API,
// get country where alpha3Code = col

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    //promise needs await
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeighbors = async () => {
  const columbia = await fetchCountry('col');
  console.log(columbia);
  //to handle an array of promises, we use Promise.all
  const neighbors = await Promise.all(
    columbia.borders.map((border) => fetchCountry(border))
  );
  console.log(neighbors);
};
//call the function
fetchCountryAndNeighbors();
