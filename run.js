/* G-Code editor and for Niall @ Pioneer Valley Frameworks

*******Set code Name********/
var codeName = '803.i';
//Header imports and variables
var fs = require('fs');

var data;
var index;
var currentIndex = 65535;
var currentToReplace;
var replaceWith;
var currentIndex;

//Read in Gcode file
data = fs.readFileSync('codes/' + codeName, 'utf8');
fs.rename('codes/' + codeName, 'codes/original-' + codeName);

data = data.replace(/(?:\r\n|\r|\n)/g, " ");
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
var completedFile = data.replace(/ N/g, '\nN');
fs.writeFile('codes/' + codeName, completedFile, 'utf8', function (err) {
  if (err) {
    console.log('File could not be saved!');
  } else {
    console.log('File has been saved!');
  }
});
