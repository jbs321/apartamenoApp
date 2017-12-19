import axios from 'axios';
export const FETCH_SEARCH_RESULTS = "fetch_search_results";

export function fetchSearchResults(searchText) {
    const request = axios.get(process.env.ENV.API_URL + "/places/search/" + searchText);

    return {
        type: FETCH_SEARCH_RESULTS,
        payload: request
    }
}