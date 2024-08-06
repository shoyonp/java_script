// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "purna",
    "full name": "shoyon kumar",
    [mySym]: "mykey1",
    age: 19,
    location: "bera",
    email: "purna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "shoyon@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "shoyon@microsoft.com"
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("hello purna");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());