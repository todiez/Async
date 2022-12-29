console.log(1);
console.log(2);

//Fetch returns a promise, therefore we can use .then
fetch("todos/todos.json")
  .then((response) => {
    //then === resolove

    //.json() is a method provided by fetch
    return response.json(); //another promise which takes some time to fulfill, use return to take another .then
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    //catch === reject
    console.log("fetch error", err);
  });

console.log(3);
console.log(4);
