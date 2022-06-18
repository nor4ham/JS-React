fetch("books.json")
    .then(res => res.json())
    .then(books => {
        console.log(books)
    })