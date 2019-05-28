const fs = require('fs');

/* This utility file is used to call fs readFile to read the test the students build
 * then call appendFile to append the tests the student built to the os tool test file
*/

// Reading the students test file
fs.readFile('./index.spec.js', { encoding: 'utf-8' },function(err, data) {
    if (err) {
        console.error(err);
    }
    // appending that student file to os tool test file
  fs.appendFile('test/index.spec.js', data, (err, stdout) =>{
      if(err){
        console.error(err);
      }
    });

});  