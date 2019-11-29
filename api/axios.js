const axios = require('axios');
const baseURL = 'https://www.receitaws.com.br/v1/cnpj/';

const api = axios.create({
    baseURL: baseURL,
});

module.exports = api;