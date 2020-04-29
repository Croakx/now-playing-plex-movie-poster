// Now Playing Plex Movie Poster configuration
const config = {
  plex: {
    ip: '192.168.1.50', // Your Plex server IP
    port: 32400 // Your Plex server port. Default is 32400
  },
  app: {
    port: 3200, // On which port do you want to run this app
    refresh: 2000 // How often do you want to refresh the ajax call to retrieve your movie info
  }
 };

 module.exports = config;