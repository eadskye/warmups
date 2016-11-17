// Description:

// Welcome. In this warmup you are required to, given a
// string, replace every letter with its position
// in the alphabet. If anything in the text isn't a letter,
// ignore it and don't return it. a being 1, b being 2,
// etc. As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20
// 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

function alphabetPosition(text) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var position = '';
  for(var i=0; i< text.length; i++) {
    if(alphabet.includes(text[i].toLowerCase())) {
      replace(alphabet.indexOf(text[i].toLowerCase()) +1) + "";
    } else {
      continue;
    }
    return position.trim()
  }
  alphabetPosition("The sunset sets at twelve o'clock.")
}

// module.exports = {
//   attendance: "WORD UP",
//   alphabetPosition:alphabetPosition
// }
