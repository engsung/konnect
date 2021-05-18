const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

var subscriptionKey = process.env.AZURE_SUBSCRIPTION_KEY;
var endpoint = process.env.AZURE_ENDPOINT;

export function translateText(){
    axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': ['kh']
        },
        data: [{
            'text': 'Hello World!'
        }],
        responseType: 'json'
    }).then(function(response){
        return JSON.stringify(response.data, null, 4);
    });
}
