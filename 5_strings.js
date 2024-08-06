const name ="purna"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('purna-ps-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 5)
console.log(anotherString);

const newStringOne = "    purna    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shoyon.com/shoyon%20purna"

console.log(url.replace('%20', '-'))

console.log(url.includes("purna"))

console.log(gameName.split('-'));
