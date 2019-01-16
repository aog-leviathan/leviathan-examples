const { Leviathan } = require('leviathan');
const { dialogflow } = require('actions-on-google');
const { roomName } = require('./entities/room-name');
const { bookRoom } = require('./intents/book-room');

const app = new Leviathan(dialogflow({debug: true}));

app.create(roomName);
app.create(bookRoom);

exports.app = app;
