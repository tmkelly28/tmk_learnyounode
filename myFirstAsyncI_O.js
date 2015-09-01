var fs = require('fs');
var file = fs.readFile(process.argv[2], function(error, contents) {
  if (error) { throw error; }
  console.log(contents.toString().split('\n').length - 1);
});