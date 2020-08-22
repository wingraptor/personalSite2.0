const hexToRgb = function(hex) {
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Generate random number
function randomNum(maxNum, minNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

// Generate random lowercase letter
function randomLett(){
  return String.fromCharCode(randomNum(102, 97));
}

// Generate random hex digit
function randomDig(){
  var number = randomNum(0,1);
  //format hex in "numLetter" format
  if (number === 0){
    return `${randomNum(0,9)}${randomLett()}`;
  }
  // format hex digit in 'letterNumber' format
  else if (number === 1) {
    return `${randomLett()}${randomNum(0,9)}`;
  }
}

//Generate new hex code in #xxxxxx format
const randomColorHex = function(){
  return `#${randomDig()}${randomDig()}${randomDig()}`;
}

export { hexToRgb, randomColorHex };