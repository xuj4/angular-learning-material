// true false fantasy, one of the big reason we want to use typesript 

/**
 * false, 0, "", null, undefined, and NaN = > false 
 * Everything else => true
 */

// 2 == "2";
// 2 === "2";
// 2 === 2;
// 10 % 3;
// 10 % 3 === 1;
// true && false;
// false || true;
// 'false' || 'true';
// 'null';

const a = [];

// a          what is the value
// !a         what is the value
// a.length   what is the value


// Example code you can use to check result
let s = 2 == "2";
if (s) {
  console.log('This returns true');
} else {
  console.log('A false value is returned');
}




/**
 * In the code, you see a lot of &&, do you really understand what they are used for? 
 * Now try to guess the value of these expressions
 * 
 * true && false && false 
 * 3 && 1 && 0 && 10
 * true && 1 && { name: 'John' }
 */ 

/** 
 * assume an object const person = undefined;
 * what will be the value of person && person.name, will exception be thrown?
 */

/**
 * How about || 
 * Now try to guess the value of these expressions
 * 
 * true || false; 
 * 0 || -1 || 10
 * 1 || -1 || 10
 */

const person = {
  name: 'Jimmy'
};

person.name || 'Unknown'; // What is the value?
person.job  || 'Unknown'; // What is the value?