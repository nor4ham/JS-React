### HomeWork Week 03 Day 1

#### Using the req/res api, do the following using React Components:
You can work in one component or can make more than one components.
Don't forget to put the login details in the state and render that in the components.

1. Send a GET request to "https://reqres.in/api/users?page=" and get the list of users on page 1, and render them as a list on the HTML page
2. Create a register section that has a username and password inputs, and then send these details in a POST request to "https://reqres.in/api/register" to create a new user and response as follows:
    * If the registeration is successful, render the token sent in the response on the HTML page.
    * If the registeration is unsuccessful, render the error message sent in the response  on the HTML page.
3. Create an update section that has name and job inputs, and send them in  a PUT  a request to "https://reqres.in/api/users/5" to update the information of the user, and render the (updatedAt) message sent with the response
4. Create a "delete" button that sends a DELETE request to "https://reqres.in/api/users/5" to delete the user and render the message "deleted successfully" when the status code is (204).
 
   
:exclamation: All the requests must be done using axios, and the async await (try catch) method should be used at least for one of the previous requests
 
**Bonus**: Search about `componentShouldUpdate()` and use it to prevent unnecessary requests. 
