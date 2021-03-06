// Given an Array of strings, use Array.prototype.reduce to write a function that
// creates an object that contains the number of times each string occured in the array.

const someWords = ["apple", "banana", "apple", "durian", "durian", "durian"];

const countWords = words => {
  return words.reduce((distinctWords,word) =>{
    if(distinctWords[word] != null){
      distinctWords[word]++;
    }else{
      distinctWords[word]=1;
    }
    return distinctWords;
  },{});
};

console.log(countWords(someWords));
// {
//   apple: 2,
//   banana: 1,
//   durian: 3,
// }

module.exports = countWords;
