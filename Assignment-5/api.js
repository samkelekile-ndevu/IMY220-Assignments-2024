export const fetchStarWars = async (no) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${no}`);
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(error.message);
    return { error: true, error_message: error.message };
  }
};

export const fetchStarWarsBySearch = async (search) => {
  try{
    console.log(`https://swapi.dev/api/people/?search=${search}`);
    const response = await fetch(`https://swapi.dev/api/people/?search=${search}`);
    const data = await response.json();
    if(data.results.length === 0) {
      return { error: true, error_message: "No results found" };
    }
    return data.results[0];
  }
  catch (error) {
    console.error(error.message);
    return { error: true, error_message: error.message };
  }
}