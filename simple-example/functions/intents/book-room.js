const { Intent } = require('leviathan');

const intent = new Intent({

  name: 'book-room',

  trainingPhrases: [
    'Is <roomName>Atlantis</roomName> booked right now?',
    'Is <roomName>Lemuria</roomName> open?',
  ],

  fulfillment: (conv, {roomName}) => {
    conv.ask(roomName + ' is busy right now');
  }

});

exports.bookRoom = intent;
