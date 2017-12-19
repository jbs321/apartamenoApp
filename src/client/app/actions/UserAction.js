import axios from 'axios';
export const REGISTER_USER = "register_user";
let qs = require('qs');

export function registerUser(user, cb) {
    const request = axios.post(process.env.ENV.API_URL + "/register", qs.stringify(user))
        .then((result) => cb(result))
        .catch((result) => cb(result));

    return {
        type: REGISTER_USER,
        payload: request
    }
}