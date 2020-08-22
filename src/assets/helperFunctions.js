// See here: https://github.com/wingraptor/quotegenerator/blob/master/scripts/main.js
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
function randomLett() {
  return String.fromCharCode(randomNum(102, 97));
}

// Generate random hex digit
function randomDig() {
  var number = randomNum(0, 1);
  //format hex in "numLetter" format
  if (number === 0) {
    return `${randomNum(0, 9)}${randomLett()}`;
  }
  // format hex digit in 'letterNumber' format
  else if (number === 1) {
    return `${randomLett()}${randomNum(0, 9)}`;
  }
}

//Generate new hex code in #xxxxxx format
const randomColorHex = function() {
  return `#${randomDig()}${randomDig()}${randomDig()}`;
};

// Generate hsl in the form hsl()
// See --> https://stackoverflow.com/a/23603772
const randomColorHsl = function() {
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
};

// Convert hsl in the form hsl(120, 100%, 75%) to rgb in the form {r: 0, g: 0, b:0}
// See --> https://css-tricks.com/converting-color-spaces-in-javascript/
const HsltoRgb = function(hsl) {
  let sep = hsl.indexOf(",") > -1 ? "," : " ";
  hsl = hsl
    .substr(4)
    .split(")")[0]
    .split(sep);
    console.log(hsl);

  let h = hsl[0],
    s = hsl[1].substr(0, hsl[1].length - 1) / 100,
    l = hsl[2].substr(0, hsl[2].length - 1) / 100;

  // Strip label and convert to degrees (if necessary)
  if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);
  else if (h.indexOf("rad") > -1)
    h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
  else if (h.indexOf("turn") > -1)
    h = Math.round(h.substr(0, h.length - 4) * 360);
  // Keep hue fraction of 360 if ending up over
  if (h >= 360) h %= 360;

  // Conversion to RGB begins

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
};

export { hexToRgb, randomColorHex, randomColorHsl, HsltoRgb };
