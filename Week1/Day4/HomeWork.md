## Week01 Day 4 JS Array Iterator Methods

### `forEach`

**PURPOSE:** General purpose iterator method.

```js
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend);
});

// logs out "I have a friend named <friend's name>" for each friend
```


**Question 1:**

- Using `forEach` log out each of my `friends` but with their name all lower-cased. Use the `<str>.toLowerCase()` method. 

---

### `map`

**PURPOSE:** Create a new array from a source array, usually "transforming" its values. The returned array is always the same length as the source array.

##### Transform an array

```js
const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function(num) {
  return num * 2;
});

// numsTimesTwo --> [1, 4, 6]

/*--- using an arrow function for the callback ---*/
const timesTwo = numbers.map(num => num * 2);
```

**Question 2:**

* Create an array that has the numbers of the array numbers squared

```js
const numbers = [1, 5, 8]

// numbersSquared --> [1, 25, 64]
```

**Bonus Question 2:**

* Use an arrow function inside `map()`

Given an array of instructors,

```js
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
```

**Question 3:**

* Use `map` to create a new array that adds the string " is awesome" to each element in the array.

```js
["Alex is awesome", "Daniel is awesome", "Morgan is awesome", "Ben is awesome", "Micah is awesome", "Jims is awesome"]
```
---

### `reduce`

**PURPOSE:** Reduce an array into a single value.  Note that the "single value" can be a single object, array - anything.

##### Sum up the numbers in an array

```js
const nums = [25, 6, 100, 3];
let sum = nums.reduce(function(acc, num) {
  return acc + num;
}, 0);

// sum equals 134

/*--- using an arrow function for the callback ---*/
let sum = nums.reduce((acc, num) => acc + num);
```

##### Count Even numbers

**Question 4:**

* Given the array nums try to count the number of even numbers using reduce() and put it in the variable evenNumbers:
```js
const nums = [25, 6, 8, 3];

// evenNumbers equals 2

```
---

### `filter`

**PURPOSE:** Select certain elements from a source array.

##### Obtain just the odd numbers

```js
const nums = [100, 2, 5, 42, 99];
const odds = nums.filter(function(num) {
  if (num % 2 !== 0)
    return true
  else
    return false
});

console.log(odds);

/*--- using an arrow function for the callback ---*/
const odds = nums.filter(num => num % 2 !== 0);
```

##### YOU DO

**Question 5:**
* Filter out all "jerks"!
* Put them in an array called jerks

```js
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

// jerks equals ["jerks", "jerks"]
```

---
### Arrow Methods
Using arrow methods, do the following:
1. Create a function to get the average of a group of numbers  avg([8, 2, 2, 4]) // should return 4
2. Create a function to reverse the letters in a word 
reverse("caterpillar") // should return "rallipretac"

### Objects Exercise: The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
Maybe the join method will be helpful here

## Reference

[Array Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
