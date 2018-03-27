const mongoose = require('mongoose');

//Using the ES6 implementation
mongoose.Promise = global.Promise;
 
//Run first test after connection has been made
before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once ('open', () => { done (); })
    .on ('error', (error) => {
      console.log.warn('Warning', error);
    });
});

//Before running test we want to drop users
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test!
    done();
  });
});