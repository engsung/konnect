const transalator = require('./translate');

module.exports = async function App(context) {
  if (context.event.isText) {
    let response = await transalator(context.event.text);
    await context.sendText(response[0].translations[0].text);
  }
};
