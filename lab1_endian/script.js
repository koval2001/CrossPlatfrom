const endianCode = require('endian-code');

console.log("Library: ", endianCode.encode(0x11869F, 3, false).map(x => x.toString(16)));

let a = 1148575;

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

const hexA = decimalToHexString(a);
const ByteArrayA = hexToBytes(hexA);
const reverseByteArrayA = ByteArrayA.reverse();
const newByteArrayA = bytesToHex(reverseByteArrayA);

console.log(hexA);
console.log(ByteArrayA);
console.log(reverseByteArrayA);
console.log(newByteArrayA);
console.log(parseInt(newByteArrayA,16))
