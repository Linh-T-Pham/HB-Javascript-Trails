"use strict";


/** 1. printIndices */
const printIndices = (items) => {
  for (const i in items) {
    console.log(i);
  }
};

const nums = [1,2,3,4];
printIndices(nums);

/** 2. everyOtherItem */
const everyOtherItem = (items) => {
	const new_list = []
  for (const i in items) {
    if (i % 2 === 0){
      new_list.push(items[i]);
    }
  }
  console.log(new_list);
};

const test = [1,2,3,4];
everyOtherItem(test);


// * 3. smallestNItems 
const smallestNItems = (items, n) => {
items.sort();
const shortList = items.slice(0,n);
const result = shortList.reverse() ;
console.log(result);
};

const test2 = ['a','r','c','h','d','e'];
smallestNItems(test2,4);
