console.log(1);
console.log(2);

//async and await

//an async functions always returns a promise
const getTodos = async () => {
    //fetch return a promise, await stops from assigning to response till 
    //the promise is resolved

    console.log("async function started");
    const response = await fetch('todos/todos.json');
    console.log(response);
    const data = await response.json();
    console.log("inside getToDos:" , data);
    return data;
};


const test = getTodos();
console.log(test);

//Fetch returns a promise, therefore we can use .then
// fetch("todos/todos.json")
//   .then((response) => {
//     //then === resolve
//     //.json() is a method provided by fetch
//     return response.json(); //another promise which takes some time to fulfill, use return to take another .then
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     //catch === reject
//     console.log("fetch error", err);
//   });

console.log(3);
console.log(4);
