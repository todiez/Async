console.log(1);
console.log(2);

//async and await

//an async functions always returns a promise
const getTodos = async () => {
  //fetch return a promise, await stops from assigning to response till
  //the promise is resolved
  console.log("async function started");
  
  const response = await fetch("todos/todofs.json");
  if (response.status !== 200) {
    console.log("Error fetching data");
    throw new Error("Cannot fetch data"); //creating a new Error Object
    //if an error inside an async function is thrown, the promise gets rejected
  }
  const data = await response.json();
  return data;
};
console.log(3);
//.then is once necessary
getTodos()
  .then((data) => console.log("resolved: ", data))
  .catch((err) => console.log("error while fetching: ", err));

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

console.log(4);
