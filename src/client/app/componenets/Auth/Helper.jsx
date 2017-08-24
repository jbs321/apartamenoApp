import {AUTH_CONFIG} from './Variables.jsx';

export function getAuthorizeParams() {
    let param_keys = [
        'scope',
        'client_id',
        'redirect_uri',
        'response_type',
    ];

    let params = {
        scope: AUTH_CONFIG.scope,
        client_id: AUTH_CONFIG.clientID,
        redirect_uri: AUTH_CONFIG.callbackUrl,
        response_type: AUTH_CONFIG.response_type,
    };

    let paramQuery = "";

    param_keys.forEach((key) => {
        if (paramQuery !== "") {
            paramQuery += "&"
        }

        if (params[key] === undefined) {
            throw new Error('key isn\'t set');
        }

        paramQuery += key + "=" + params[key];
    });

    return paramQuery;
}