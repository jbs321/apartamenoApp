import history from "../../History.jsx"
import {AUTH_CONFIG} from './Variables.jsx';
import axios from 'axios';
import {create_http_query, getParameterByName, redirect} from './WindowHelper';

export default class Auth {
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
    }

    getAccessToken() {
        const accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
            throw new Error('No access token found');
        }

        return accessToken;
    }

    // getUserProfile() {
    //     axios({
    //         method: "POST",
    //         url: "/api"
    //     });
    // }

    /**
     * Here the callback from api authentication is being handled.
     */
    handleAuthentication(myCode) {
        console.log(myCode);
        if (myCode === undefined) {
            if (getParameterByName('code') !== undefined) {
                myCode = getParameterByName('code');
            } else {
                throw new Error('Code Not Found');
            }
        }

        axios({
            method: "POST",
            url: "/oauth/token",
            data: {
                grant_type: "authorization_code",
                client_id: AUTH_CONFIG.clientID,
                client_secret: AUTH_CONFIG.secret,
                code: myCode,
                redirect_uri: AUTH_CONFIG.callbackUrl,
            }
        }).then(result => {
            this.setSession(result.data);

            console.log(result.data);

            //set Auth token for every request
            axios.defaults.headers.common['Authorization'] = "Bearer " + result.data.access_token;

            // navigate to the home route
            history.replace('/');
        });


        history.replace('/');
    };

    login() {
        let link = AUTH_CONFIG.domain + "/oauth/authorize?" + create_http_query({
                scope: '*',
                client_id: AUTH_CONFIG.clientID,
                redirect_uri: AUTH_CONFIG.callbackUrl,
                response_type: 'code',
            });

        redirect(link);
    }


    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');

        // navigate to the home route
        history.replace('/');
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return (parseInt(expiresAt) / (60 * 60 * 24) > 0);
    }

    setSession(data) {
        // Set the time that the access token will expire at
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("expires_at", data.expires_in);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("token_type", data.token_type);
    }
}

