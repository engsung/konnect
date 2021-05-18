
const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

var subscriptionKey = process.env.AZURE_SUBSCRIPTION_KEY;
var endpoint = process.env.AZURE_ENDPOINT;
var location = process.env.AZURE_LOCATION;

async function translateText(){
  console.log('sub ley: ', subscriptionKey)

    const response = await axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': ['de', 'it']
        },
        data: [{
            'text': 'Hello World!'
        }],
        responseType: 'json'
    });

    console.log(response.data.translations[0].text);

    return response.data; 
}

module.exports = async function App(context) {
  let data = await translateText();
  await context.sendText("hi");
};
