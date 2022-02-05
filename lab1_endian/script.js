import chalk from 'chalk';
import endianCode from 'endian-code';

// From Low Endian to Big Endian
// Library Usage
const lowEndianArray = [0x9F8611, 0x10869F, 0x1444F2, 0x2A3331, 0xB1234A];
const bigEndianArray = [0x11869F, 0x9F8610, 0xF24414, 0x31332A, 0x4A23B1];
console.log(chalk.bgBlue.bold("Library Examples:"));

console.log("Converting low endian numbers to big endian numbers:");
lowEndianArray.map(el => {
  const reversedArray = endianCode.encode(el, 3, true).map(x => x.toString(16)).reverse();
  const bigEndianNumber = parseInt(reversedArray.join(''), 16);
  console.log(el, ": ", bigEndianNumber);
})

console.log("Converting big endian numbers to low endian numbers:");
bigEndianArray.map(el => {
  const reversedArray = endianCode.encode(el, 3, true).map(x => x.toString(16)).reverse();
  const lowEndianNumber = parseInt(reversedArray.join(''), 16);
  console.log(el, ": ", lowEndianNumber);
})

// Without library
function decimalToHexString(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
  }

  return number.toString(16).toUpperCase();
}

function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

function bytesToHex(bytes) {
  for (var hex = [], i = 0; i < bytes.length; i++) {
    let current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
    hex.push((current >>> 4).toString(16));
    hex.push((current & 0xF).toString(16));
  }
  return hex.join("");
}

function convertEndianNumber(el) {
  const hexNumber = decimalToHexString(el);
  const ByteArray = hexToBytes(hexNumber);
  const reverseByteArray = ByteArray.reverse();
  const newByteArray = bytesToHex(reverseByteArray);

  return parseInt(newByteArray,16);
}

console.log(chalk.bgRed.bold("Examples without using library:"));
console.log("Converting low endian numbers to big endian numbers:");
lowEndianArray.map(el => {
  console.log(el, ": ", convertEndianNumber(el));
});

console.log("Converting big endian numbers to low endian numbers:");
bigEndianArray.map(el => {
  console.log(el, ": ", convertEndianNumber(el));
});
