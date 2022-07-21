// copies and ferences 

const person = {
  age: 20,
    name: 'Tyler',
    address: {
      city: 'moon'
  }
};

const peopleArray = [person, person, person];
peopleArray[1].name = 'Jimmy';
// What is the value of peopleArray[0].name and why? 

const person2 = {
  age: 25,
  name: 'Tyler'
};

const peopleArray2 = [{ ...person2 }, { ...person2 }, { ...person2 }];
peopleArray2[1].name = 'Jimmy';
// What is the value of peopleArray2[0].name now and why? 


const person3 = { ...person, ...person2 };
// What is the value of person3.age and why? 

let a = 1;
const b = 2; 
// Which value can be altered? difference between cost and let 

const person5 = { ...person }
person5.age = 99;
// What is the value of person5.age and why? 

const person4 = { ...person };
person4.address.city = 'sun';
// console.log(person.address.city);
// What is the value of person.address.city and why? Google shallow and deep copies in javascript 



