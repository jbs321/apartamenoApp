import axios from 'axios';
export const API_URL = process.env.ENV.API_URL;
export const FETCH_USER_BUILDING = "fetch_user_building";
let qs = require('qs');

const token = localStorage.getItem('token_type') + " " + localStorage.getItem('access_token');
const authHeader = {
    headers: {
        'Authorization': token
    }
};

export function fetchUserBuilding() {
    const request = axios.post('regBuilding', null, authHeader);

    return {
        type: FETCH_USER_BUILDING,
        payload: request
    }
}