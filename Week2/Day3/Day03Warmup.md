# React Props Homework

Create a **React** app and inside `app.js`, paste the following array of objects:
```
const movies = [

    {
        title:"Interstellar",
        genre:["adventure", "sci-fi"],
        duration(hrs): 3,
    },
    {
        title:"The Hateful Eight",
        genre:["western","drama"],
        duration(hrs): 3,
    },
    {
        title:"Inception",
        genre:["action", "sci-fi"],
        duration(hrs): 2.5,
    },
    {
        title:"Avengers: Endgame",
        genre:["action", "sci-fi"],
        duration(hrs): 3,
    },
    {
        title:"Kimetsu no Yaiba: Kyōdai no Kizuna",
        genre:["action", "fantasy"],
        duration(hrs): 2,
    },
    {
        title:"The Suicide Squad",
        genre:["action", "sci-fi"],
        duration(hrs): 2,
    },
    {
        title:"The Magnificent Seven",
        genre:["action", "western"],
        duration(hrs): 2,
    }
]
```

Create the following components:
- `ShowAll` component; it will show all the movies with all the details.

- `WesternOnly` component; it will show movies that have "Western" inside the genre value.

- `Sub2.5hrs` component; it will show only movies that have duration **less** than 2.5 hours.

pass the array as a prop to each component.

make sure to do enough **CSS** styling for each component