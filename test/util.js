const fs = require('fs');
const path = require("path");

/* This utility file is used to call fs readFile to read the test the students build
 * then call appendFile to append the tests the student built to the os tool test file
 */

/* __dirname is a global Node variable that references the directory of the
 * current module rather than the working directory (which fs.readFile uses
 * by default)
 */
const studentFile = path.resolve(__dirname, '../index.spec.js');
const testFile = path.resolve(__dirname, 'index.spec.js');

// Reading the students test file
fs.readFile(studentFile, function(err, data) {
    if (err) {
        console.error(err);
    }
    
    // appending that student file to os tool test file
    fs.appendFile(testFile, data, (err, stdout) => {
        if (err) {
            console.error(err);
        }
    });
    
});