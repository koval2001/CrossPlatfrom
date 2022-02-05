import chalk from 'chalk';
import endianCode from 'endian-code';

// From Low Endian to Big Endian
// Without library
const lowEndianArray = [0x9F8611, 0x10869F, 0x1444F2, 0x2A3331, 0xB1234A];
const bigEndianArray = [0x11869F, 0x9F8610, 0xF24414, 0x31332A, 0x4A23B1];

const hexToBinary = hex => parseInt(hex, 16).toString(2).padStart(8, '0');

function decimalToHex(number) {
  if (number < 0) {
    number = 0xFFFFFFFF + number + 1
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
  const hexNumber = decimalToHex(el);
  const BytesArray = hexToBytes(hexNumber);
  const reversedArray = BytesArray.reverse();

  const reversedHexArray = bytesToHex(reversedArray) + '00';

  const newNumber = parseInt(reversedHexArray,16);
  return newNumber;
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

// Library Usage
console.log(chalk.bgBlue.bold("Library Examples:"));

console.log("Converting low endian numbers to big endian numbers:");
lowEndianArray.map(el => {
  const hexReversedArray = endianCode.encode(el, 4, false).map(x => x.toString(16));
  const binaryNumber = hexReversedArray.map(el => hexToBinary(el)).join('');
  const decimalNumber = parseInt(binaryNumber, 2);

  console.log(el, ": ", decimalNumber);
})

console.log("Converting big endian numbers to low endian numbers:");
bigEndianArray.map(el => {
  const hexArray = endianCode.encode(el, 4, false).map(x => x.toString(16));
  const binaryNumber = hexArray.map(el => hexToBinary(el)).join('');
  const decimalNumber = parseInt(binaryNumber, 2);

  console.log(el, ": ", decimalNumber);
})
