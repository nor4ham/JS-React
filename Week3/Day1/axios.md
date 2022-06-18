## Axios

[Axios Documentation](https://github.com/axios/axios)

Another method is using Axios which is a library that can be used instead of fetch.

*Get Request Example*

```js
axios({
  method: 'get',
  url: 'https://reqres.in/api/users/1'
});
```

*Post Request Example*

```js
axios({
  method: 'post',
  url: 'https://reqres.in/api/users/1',
  data: {
    firstName: 'brunos',
    lastName: 'ilovenodejs'
  }
});
```

### Response Object

- *data*: the payload returned from the server. By default, Axios expects JSON and will parse this back into a JavaScript object for you.
- *status*: the HTTP code returned from the server.
- *statusText*: the HTTP status message returned by the server.


### Error Object

- *message*: the error message text.
- *response*: the response object (if received) as described in the previous section.
- *request*: the actual XMLHttpRequest object (when running in a browser).

### Handling Responses

Since an AJAX call is asynchronous, we need to handle its response in a particular way.  

You may have already used some asynchronous javascript with `setTimeout()`.  Potentially you ran into a problem with it.  

[Let's take a look at how asynchronous javascript works!](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

To work with asynchronous javascript, we are going to use promises and a promise chain.

```js
// Example 1
axios({
  url: 'https://dog.ceo/api/breed/boxer/images/random',
  method: 'get',
})
.then()
.catch() // .then and .catch are chained at the end of the request 
```

It is easier to read if we place them on the next line

```js
axios({
  url: 'https://dog.ceo/api/breed/boxer/images/random',
  method: 'get',
})
.then() // .then wants a function to run if the request is succesful
.catch() // .catch wants a function to run if the request is unsuccesful
```

The `.then` and `.catch` method want us to pass them functions to run.
`.then` wants a function to run if the request succeeds 
`.catch` wants a function to run if the request fails

```js
axios({
  url: 'https://dog.ceo/api/breed/boxer/images/random',
  method: 'get',
})
.then(doGoodStuff) 
.catch(doErrorStuff) 
```

We often use anonymous, fat arrow functions.

```js
axios({
  url: 'https://dog.ceo/api/breed/boxer/images/random',
  method: 'get',
})
.then(() => {
    // code for if the request succeeds
}) 
.catch(()=>{
    // code for if the request fails
}) 
```

`axios` will pass our functions the `response` or `error` object so that we can access the data that the API returns to us.

```js
let options = {
  url: 'https://dog.ceo/api/breed/boxer/images/random',
  method: 'get',
  headers:{

  }
}
axios(options)
.then((response) => {
    // code for if the request succeeds
    console.log(response)
}) 
.catch((error)=>{
    // code for if the request fails
    console.log(error)
}) 
```

<br>

## Postman

Postman is Client API Tool, where developers can develop, test, share and document API's.
[Postman Docs](https://www.getpostman.com/)

![](https://i.imgur.com/Px0MmFA.png)

Postman is a tool to test and build APIs. It's super helpful to test requests that will require a form (`POST` or `PUT/PATCH`) or a link/button (`DELETE`).

<br>

## CRUD API Requests

[Reqres.in Docs](https://reqres.in/)

![](https://i.imgur.com/MC3d9KN.png)

#### CREATE/POST DOCS

![](https://i.imgur.com/BT2Nv0U.png)

#### CREATE WITH A FORM

![](https://i.imgur.com/DsNSAyo.png)

#### CREATE WITH RAW JSON

![](https://i.imgur.com/DsNSAyo.png)


### Additional Resources:

- [Public APIs](https://github.com/public-apis/public-apis)
