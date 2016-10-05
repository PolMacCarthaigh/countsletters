function countletters(string) {
  var result = {};
  var string = string.split(" ").join("");
  var array = string.split("")
  for (letters of string) {
    if (result[letters]) {
      result[letters] += 1;
    }
    else {
      result[letters] = 1;
    }
  }
  return result;

}
console.log(countletters("lighthouse in the house"));

