// it is good practice to keep all API calls in a separate file that contains all of your API
// calls so that you can keep all tghe networking operations or stuff related 
// to the API in a seperate file and find it easily when you need to make changes

const API_KEY = "d454b08c586322cc478842d938e50a87";
const BASE_URL = "https://api.themoviedb.org/3";


// an async function means that it is asynchronoous
// and it will take a second to return a result
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results;

}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}