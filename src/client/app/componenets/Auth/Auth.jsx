import history from "../../History.jsx"
import {getAuthorizeParams} from './Helper.jsx';
import {AUTH_CONFIG} from './Variables.jsx';
import axios from 'axios';
import BuildingDat from "../DataTypes/BuildingDat";

let qs = require('qs');

export default class Auth {
    constructor() {
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
    }

    handleAuthentication(code) {
        if (!code) {
            throw new Error('Missing Code');
        }

        axios.post("oauth/token",
            qs.stringify({
                code: code,
                client_id: AUTH_CONFIG.clientID,
                grant_type: 'authorization_code',
                redirect_uri: AUTH_CONFIG.callbackUrl,
                client_secret: AUTH_CONFIG.clientSecret,
            }), {baseURL: process.env.ENV.API_URL_AUTH}
        ).then((result) => {
            this.setSession(result.data);
             history.replace('/');

        }).catch((err) => {
            console.log(err);
        });
    }

    static getProfile(callback) {
        axios.post('getProfile')
            .then((result) => {
                let data = result.data;
                localStorage.setItem('userId', data['id']);
                localStorage.setItem('user', JSON.stringify(data));
                callback(data);
            });
    }

    static getUserId() {
        if(localStorage.getItem('userId') !== undefined) {
            return localStorage.getItem('userId');
        }

        return null;
    }

    static getUser() {
        if(localStorage.getItem('user') !== undefined) {
            return JSON.parse(localStorage.getItem('user'));
        }

        return null;
    }

    static authenticate(email, password, scope = '') {
        let postData = {
            grant_type: 'password',
            password: password,
            client_id: process.env.ENV.AUTH_CONFIG_CLIENT_ID,
            client_secret: process.env.ENV.AUTH_CONFIG_CLIENT_SECRET,
            username: email,
            scope: scope,
        };

        axios({
            method: "POST",
            url: "oauth/token",
            baseURL: process.env.ENV.API_URL_AUTH,
            data: qs.stringify(postData),
        }).then(result => {
            this.setSession(result.data);
            setTimeout(() => { history.replace('/'); }, '2000');
        }).catch(e => {
            alert(e.message);
            console.log(e);
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

        if(isAuthenticated) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token_type') + " " + localStorage.getItem('access_token');
        }

        return isAuthenticated;
    }

    static getRegisteredBuilding(cb) {
        let buildingData;

        let regBuilding = localStorage.getItem('regBuilding');

        if(regBuilding !== undefined && regBuilding !== null) {
            buildingData = new BuildingDat(JSON.parse(localStorage.getItem('regBuilding')));
        } else {
            axios.post('regBuilding').then(result => {
                localStorage.setItem('regBuilding', JSON.stringify(result.data));
                buildingData = new BuildingDat(result.data);
            });
        }

        //callback with buildingDat
        cb(buildingData);
    }
}