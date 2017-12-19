import axios from 'axios';
export const API_URL = process.env.ENV.API_URL;
export const FETCH_USER_PROFILE = "fetch_user_profile";


let qs = require('qs');

const URL_GET_USER_PROFILE = "getProfile";

export function fetchUserProfile() {
    if (localStorage.getItem('token_type')
        && localStorage.getItem('access_token')) {

        let token = [
            localStorage.getItem('token_type'),
            localStorage.getItem('access_token')
        ].join(" ");

        let authHeader = {headers: {'Authorization': token}};
        let request = axios.post(URL_GET_USER_PROFILE, null, authHeader);

        return {
            type: FETCH_USER_PROFILE,
            payload: request
        }
    }

    return {
        type: FETCH_USER_PROFILE,
        payload: false
    };
}
