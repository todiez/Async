const getTodos = (url, callbackFunction) => {
  // create request object, it is built in JS
  const request = new XMLHttpRequest();

  //fires every time the state changes in the request
  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState);
    //once the state is 4 we can do something with the response text
    if (request.readyState === 4 && request.status === 200) {
      //console.log(request.responseText);
      const data = JSON.parse(request.responseText); //takes the String of JSONfile and converts it to objects
      callbackFunction(undefined, data);
    } else if (request.readyState === 4) {
      //console.log("could not fetch data");
      callbackFunction('could not fetch data', undefined);
    }
  });
  //open is to set up the request, not the the request itself
  //open takes two arguments, first is a string and kind of, second is the endpoint
  request.open("GET", url);
  request.send();
};

console.log(1);
console.log(2);

//Callback Hell, try to avoid nesting functions, use promises instead
getTodos('todos/todos.json', (err, data) => {
    console.log(data);
    getTodos('todos/todos2.json', (err, data) => {
      console.log(data);
      getTodos('todos/todos3.json', (err, data) => {
        console.log(data);
      });
    });
});

console.log(3);
console.log(4);
