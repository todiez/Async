

// create request object, it is built in JS
const request = new XMLHttpRequest();

//fires every time the state changes in the request
request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
    //once the state is 4 we can do something with the response text

    if (request.readyState === 4) {
        console.log(request.responseText)
    }
});


//open is to set up the request, not the the request itself
//open takes two arguments, first is a string and kind of, second is the endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

request.send();