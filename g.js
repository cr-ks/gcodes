/* G-Code editor and for Niall @ Pioneer Valley Frameworks

*******Set code Name********/
var codeName = 'test.i';
//Header imports and variables
var fs = require('fs');

var data;
var index;
var currentIndex = 88000;
var currentToReplace;
var replaceWith;
var currentIndex;

//Read in Gcode file
data = fs.readFileSync('codes/' + codeName, 'utf8');

data = data.replace(/\n/g, " ");
var arr = data.split(' ');

//Loop over array and replace codes
for (var i = 10; i >= 10; i = i + 5) {
  currentCode = 'N' + currentIndex.toString();
  index = arr.indexOf(currentCode);
  if (index != -1) {
    replaceWith = 'N' + i.toString();
    arr[index] = replaceWith;
    currentIndex = currentIndex + 5;
    console.log('Replacing: ' + currentCode + ' with ' + replaceWith);
  } else {
    console.log('Finished!');
    i = 0;
  }
}

//Revert data to string and write file
data = arr.join(' ');
var completedFile = data.replace('N', '\n');
fs.writeFile('codes/new.i', completedFile, 'utf8', function (err) {
  if (err) {
    console.log('File could not be saved!');
  } else {
    console.log('File has been saved!');
  }
});
