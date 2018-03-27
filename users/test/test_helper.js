const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once ('open', () => console.log('Good to go!'))
  .on ('error', (error) => {
    console.log.warn('Warning', error);
  });

//before running test we want to drop information
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test!
    done();
  });
});