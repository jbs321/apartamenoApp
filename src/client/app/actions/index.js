import axios from 'axios';
export const API_URL = process.env.ENV.API_URL;
export const FETCH_TOP_BUILDINGS = "fetch_top_buildings";
export const FETCH_USER_PROFILE = "fetch_user_profile";


export function fetchTopBuildings() {
    const req = axios.get(`${API_URL}/buildings`);

    return {
        type: FETCH_TOP_BUILDINGS,
        payload: req
    }
}
