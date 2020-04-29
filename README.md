# Now Playing Plex Movie Poster

Display the poster and some details of the movie you are currently watching with Plex.

## Disclaimer

I'm not a developer so you will probably get mad when looking at my code but I wanted to share this with the world because I needed it and tought it can be useful to others.

## Installation

- Clone the repository
- Open `config/config.js` and edit settings
- Run `npm run build`
- Run `npm install`
- Run `npm install -g nodemon`
- Run `npm start app.js`

## Keep the app running while terminal is closed

There are several ways to do it, I personally use [PM2](https://pm2.keymetrics.io/)

## Current limitations

- The current version is optimized for portrait mode only. Works best on Smartphone, Tablets or rotated monitors.
- Support only one device streaming Plex content. If you have multiple devices watching a movie, it won't be able to display the different info