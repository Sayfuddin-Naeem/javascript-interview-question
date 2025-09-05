//todo Q1. Key Difference
// const obj = { name: "Alice", greet: () => "Hi" };
// const json = JSON.stringify(obj);
// console.log(json);


//? Question: What will be logged and why?
// * Ans:-
//* Only name property is logged.
//* Because, json ignored or removed function, symbol, and undefined

//todo Q2. Nested JSON
// const data = '{"user":{"name":"Bob","age":30}}';
// const obj = JSON.parse(data);
// console.log(obj.user.age);


//? Question: How do you access name and modify it to "Robert"?

// * Ans:
// obj.user.name = "Robert";

// todo Q3. Array Conversion
// const arr = [1, 2, 3];
// const jsonArr = JSON.stringify(arr);
// console.log(typeof jsonArr);


//? Question: What is typeof jsonArr and why?

// * Ans:
// * JSON stringify method turn the array to json string.
// * So the type of jsonArr is string.

//todo Q4. Missing Values
// const obj = { a: undefined, b: null, c: function(){} };
// console.log(JSON.stringify(obj));


//? Question: What will be the output and why?

// * Ans:
// * The output is '{"b" : null}'
//* Because, json ignored or removed function, symbol, and undefined

// todo Q6. Date Handling
// const today = { date: new Date("2025-09-04") };
// console.log(JSON.stringify(today));


//? Question: How is the date represented in JSON?

// * Ans:
// * Date is represented in json as string

//todo Q7. Local Storage
// localStorage.setItem("user", JSON.stringify({ id: 1, name: "Bob" }));
// const user = localStorage.getItem("user");
// console.log(typeof user);


// ? Question: What is the type of user and how to access the name property?

// * Ans:
// * The type of user is string

// const userObj = JSON.parse(user);
// console.log(userObj.name);

// todo Q8. Deeply Nested
// const data = '{"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]}';
// const obj = JSON.parse(data);
// console.log(obj.users[1].name);


// ? Question: How do you add a new user {id:3,name:"Charlie"} to users?

// * Ans:
// obj.users.push({id:3,name:"Charlie"});
// console.log(obj.users);

// todo Q9. Function Inside Object
// const obj = { greet: () => "Hi" };
// console.log(JSON.stringify(obj.greet));


// ? Question: What will this print and why?

// * Ans:
// * The output is undefined
//* Because, json ignored or removed function, symbol, and undefined

// todo Q10. Invalid JSON
const jsonStr = "{name:'Alice'}";
JSON.parse(jsonStr);


// ? Question: Will this work? If not, why?

// * Ans:
// * It is return a syntax error, in json string must be double quoted
