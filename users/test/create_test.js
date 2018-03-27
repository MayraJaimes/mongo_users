const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('it saves a user', (done) => {
    const joe = new User({name: 'Joe'});
    joe.save()
    .then (() => {
      //Checks if user has been saved successfully
      assert(!joe.isNew);
      done();
    });
  });
});