export const AUTH_CONFIG = {
    scope: '',
    domain: process.env.ENV.AUTH_CONFIG_DOMAIN,
    clientID: process.env.ENV.AUTH_CONFIG_CLIENT_ID,
    clientSecret: process.env.ENV.AUTH_CONFIG_CLIENT_SECRET,
    callbackUrl: process.env.ENV.AUTH_CONFIG_CALLBACK_URL,
    response_type: 'code'
};