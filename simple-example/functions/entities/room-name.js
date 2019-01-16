const { EntityType } = require('leviathan');

const entityType = new EntityType({

  name: 'roomName',

  entities: [
    ['Atlantis', 'the land beneath the sea'],
    ['Lemuria', 'Kumari Kandam'],
    ['Mu']
  ]

});

exports.roomName = entityType;
