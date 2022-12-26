const getTodos = (callbackFunction) => {
  // create request object, it is built in JS
  const request = new XMLHttpRequest();

  //fires every time the state changes in the request
  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState);
    //once the state is 4 we can do something with the response text
    if (request.readyState === 4 && request.status === 200) {
      //console.log(request.responseText);
      callbackFunction(undefined, request.responseText);
    } else if (request.readyState === 4) {
      //console.log("could not fetch data");
      callbackFunction('could not fetch data', undefined);
    }
  });
  //open is to set up the request, not the the request itself
  //open takes two arguments, first is a string and kind of, second is the endpoint
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};


console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log('callback fired');
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }

});

console.log(3);
console.log(4);
