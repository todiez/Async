const getTodos = (url) => {
  //create Promise
  return new Promise((resolve, reject) => {
    // create request object, it is built in JS ---> oldSchool, fetch is newer
    const request = new XMLHttpRequest();

    //fires every time the state changes in the request
    request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState);
      //once the state is 4 we can do something with the response text
      if (request.readyState === 4 && request.status === 200) {
        //console.log(request.responseText);
        const data = JSON.parse(request.responseText); //takes the String of JSONfile and converts it to objects
        resolve(data);
      } else if (request.readyState === 4) {
        //console.log("could not fetch data");
        reject('error getting data');
      }
    });
    //open is to set up the request, not the the request itself
    //open takes two arguments, first is a string and kind of, second is the endpoint
    request.open("GET", url);
    request.send();
  });
};

console.log(1);
console.log(2);

//Callback Hell, try to avoid nesting functions, use promises instead
// getTodos('todos/todos.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/todos2.json', (err, data) => {
//       console.log(data);
//       getTodos('todos/todos3.json', (err, data) => {
//         console.log(data);
//       });
//     });
// });

// //fake promise, no real request made, just as an example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("something new");
//     reject("error and rejected");
//   });
// };

// //.then can be added to a promises
// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// //more elegant solution with catch:
// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


getTodos('todos/todos.json').then(data => {
  console.log('promise resolved:' , data)
  //return gives another promise:
  return getTodos('todos/todos2.json');
}).then(data => {
  console.log('promise 2 resolved:' , data)
  //return gives another promise:
  return getTodos('todos/todos3.json');
}).then(data => {
  console.log('promise 3 resolved:' , data)
 
}).catch(err => {
  console.log('promise rejected:' , err);
});

console.log(3);
console.log(4);
