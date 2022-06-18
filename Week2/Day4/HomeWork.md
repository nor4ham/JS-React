### Home Work Week 2 Day 4: Life Cycle Methods

#### Exercise 1:
In the **Todo  List** app we worked on:
* add a state to the **TodoListItem** component called `compState` and give ii initial string value of `not mounted`
* add an HTML element inside the **TodoListItem** component that shows the value of `compState`.
* add the `componentDidMount()` method and make it change `compState` value to `mounted`.
* add the `componentDidUpdate()` method inside it change `compState` value to `updated`, and console log the any changed states props; showing the previous and current values,.


#### Bonus: Exercise 2 (But Try your best to complete it)
Given a stateless functional component [here](/Week02/day4/Lab/ConditionalRending/Practice.js):
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display `log in` if they're not logged in and `log out` if they are
4. Display text that says `Logged in` if the user is logged in, or `Logged out` if they're not.

