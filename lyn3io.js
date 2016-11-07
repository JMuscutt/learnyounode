var fs = require('fs');
var initfile = process.argv[2];
var newfile = fs.readFileSync(initfile);
var filestr = newfile.toString();
console.log(filestr);
