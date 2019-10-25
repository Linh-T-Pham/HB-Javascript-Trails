"use strict";


/** 1. countWords */
function countWords(phrase) {
  const wordCounts = {};
  const wordList = phrase.split(' ');
  for (const word of wordList ){
    if (word in wordCounts){
      wordCounts[word] += 1;
    }
    else{
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
};

const result = countWords("happy coding");
console.log(result);

// /** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {
  const melonPrices =  {
        2.50: ['Cantaloupe', 'Honeydew'],
        2.95: ['Watermelon'],
        3.25: ['Musk', 'Crenshaw'],
        14.25: ['Christmas']
    };

  if (!(price in melonPrices)) {
    return null;
  }

  return melonPrices[price].sort();
}

const result2 = getMelonsAtPrice(5);
console.log(result2);