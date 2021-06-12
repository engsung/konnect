## Konnect

This messenger bot is made in hopes of overcoming the language barrier between my relatives and I when communicating with each other over text.

## Demo

![konnect](https://user-images.githubusercontent.com/32558251/118592649-4bc19800-b774-11eb-9154-a19d94f36b31.gif)

## Configuration

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels.

### The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work, you must put required environment variables into your `.env` file.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

