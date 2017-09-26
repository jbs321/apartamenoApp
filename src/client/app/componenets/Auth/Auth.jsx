import history from "../../History.jsx"
import axios from 'axios';
import BuildingDat from "../DataTypes/BuildingDat";

let qs = require('qs');

export default class Auth {
    constructor() {
        this.getAccessToken = this.getAccessToken.bind(this);
    }

    static getProfile(cb) {
        axios.post('getProfile').then((result) => {
            let data = result.data;
            localStorage.setItem('userId', data['id']);
            localStorage.setItem('user', JSON.stringify(data));
            cb(data);
        });
    }

    static getUserId() {
        if (localStorage.getItem('userId') !== undefined) {
            return localStorage.getItem('userId');
        }

        return null;
    }

    static getUser() {
        if (localStorage.getItem('user') !== undefined) {
            return JSON.parse(localStorage.getItem('user'));
        }

        return null;
    }

    static authenticate(email, password, scope = '') {
        let postData = {
            scope: scope,
            username: email,
            password: password,
            client_id: process.env.ENV.AUTH_CONFIG_CLIENT_ID,
            grant_type: 'password',
            client_secret: process.env.ENV.AUTH_CONFIG_CLIENT_SECRET,
        };

        axios({
            url: "oauth/token",
            data: qs.stringify(postData),
            method: "POST",
            baseURL: process.env.ENV.API_URL_AUTH,
        }).then(result => {
            this.setSession(result.data);
            history.replace('/');
        }).catch(e => {
            alert(e.message);
            history.replace('/');
        });
    }

    getAccessToken() {
        const accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
            throw new Error('No access token found');
        }

        return accessToken;
    }

    static setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresIn = JSON.stringify((authResult.expires_in * 1000) + new Date().getTime());
        localStorage.setItem('token_type', authResult.token_type);
        localStorage.setItem('expires_in', expiresIn);
        localStorage.setItem('access_token', authResult.access_token);
        localStorage.setItem('refresh_token', authResult.refresh_token);
    }

    static logout() {
        localStorage.removeItem('token_type');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // navigate to the home route
        history.replace('/');
    }

    static isAuth() {
        if (!localStorage.getItem('expires_in')) {
            return false;
        }

        let expiresAt = JSON.parse(localStorage.getItem('expires_in'));
        let isAuthenticated = new Date().getTime() < expiresAt;

        if (isAuthenticated) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token_type') + " " + localStorage.getItem('access_token');
        }

        return isAuthenticated;
    }

    static getRegisteredBuilding(cb) {
        let buildingData;
        let regBuilding = localStorage.getItem('regBuilding');

        if (regBuilding !== undefined && regBuilding !== null) {
            buildingData = new BuildingDat(JSON.parse(localStorage.getItem('regBuilding')));
            cb(buildingData);
        } else {
            axios.post('regBuilding').then(result => {
                localStorage.setItem('regBuilding', JSON.stringify(result.data));
                buildingData = new BuildingDat(result.data);
                cb(buildingData);
            });
        }
    }
}