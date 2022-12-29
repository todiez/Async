
console.log(1);
console.log(2);



//Fetch returns a promise, therefore we can use .then
fetch('todos/todos.json').then((response) => {
    //then === resolove
    console.log("fetch resolved", response);
}).catch((err) => {
    //catch === reject
    console.log("fetch error", err);
});


console.log(3);
console.log(4);
