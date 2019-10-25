"use strict";


/** 1. isHometown */

// Define your function here
const isHomeTown = (town) => {
  if (town === "San Francisco"){
    return true;
    console.log(true)
  }
  else {
    return false; 
        }
};

const ha = "Oakland";
const result =isHomeTown(ha);
console.log(result);

// ** 2. getFullName */
const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
}

// const name = "Mia" "Chen";
const result2 = getFullName("Mia", "Chen");
console.log(result2);

/** 3. calculateTotal */

const calculateTotal = (basePrice, state,tax=0.05) =>{
  const subTotal = basePrice * (1 + tax) ;
  let fee = 0;
  if (state === 'CA') {
    fee = 0.03 * subTotal;
  }
  else if (state === 'PA'){
    fee = 2;
  }
  else if (state === 'MA') {
    if (basePrice <= 100) {
      fee = 1;
    }
    else {
      fee = 3;
    }

  }
 return subTotal + fee;
};

const result3 = calculateTotal(10, 'CA', 0.05);
console.log(result3);