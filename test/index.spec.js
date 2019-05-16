const
  expect = require('chai').expect,
  sinon = require('sinon'),
  fs = require('fs');
  
var content;
// First I want to read the file
fs.readFile('~/projects/test/index.spec.js', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
  console.log(content);
  fs.appendFileSync('index.spec.js', content);
}



