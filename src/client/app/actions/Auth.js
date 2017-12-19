import axios from 'axios';
export const API_URL = process.env.ENV.API_URL;
export const AUTHENTICATE = "authenticate";
export const IS_AUTHENTICATE = "is_authenticate";
let qs = require('qs');
const {
    API_URL_AUTH,
    AUTH_CONFIG_CLIENT_ID,
    AUTH_CONFIG_CLIENT_SECRET
} = process.env.ENV;

export function authenticate(email, password, cb) {
    const scope = '';

    let postData = {
        grant_type: 'password',
        password: password,
        client_id: AUTH_CONFIG_CLIENT_ID,
        client_secret: AUTH_CONFIG_CLIENT_SECRET,
        username: email,
        scope: scope,
    };

    const request = axios({
        method: "POST",
        url: "oauth/token",
        baseURL: API_URL_AUTH,
        data: qs.stringify(postData),
    });

    request.then(result => {
        cb(result.data);
    });

    return {
        type: AUTHENTICATE,
        payload: request
    }
}