import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'

// @ts-ignore
const keycloak = new Keycloak({
    url: '/auth/',
    realm: 'Archesky_localhost', // TODO: make this generic
    clientId: 'archesky'
});

export default keycloak
