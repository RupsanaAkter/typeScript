//get started....
let userName='Rupsana Akter';
// console.log(userName);


let num=546858;
// console.log(num);


// simple types...
let firstName:string;
let roll:number;
let position:boolean;
firstName='Aman';
roll=75465;
position=true;
console.log(`My name is ${firstName} and roll ${roll}. I have a Position ${position}`);


// special types.....
let value:any;
value='Rup'
value=45546;
value=true
console.log(value);


//array .......
const arr:string[]=['jibon'];
arr.push('aman');
console.log(arr);


const numbers = [1, 2, 3]; 
numbers.push(4);
numbers.push(67)
console.log(numbers);


//Tuples.........
let ourTuple: [number, boolean, string];
ourTuple=[56,false,'Badol']
console.log(ourTuple);

let output:[number,boolean,string];
output=[45,true,'Vir'];
output.push(34);
output.push('Belel')
console.log(output);

//object types.......
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  
  console.log(car);