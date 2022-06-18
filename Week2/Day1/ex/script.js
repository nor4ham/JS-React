const button = document.querySelector("#add")
let items = []

const localList = JSON.parse(localStorage.getItem("list"))
if (localList !== null)
    items = localList


function addItem(item) {
    const itemElement = document.createElement("li")
    itemElement.innerHTML = item

    itemElement.addEventListener("click", function (e) {
        e.target.remove()
        items = items.filter(item => item !== e.target.innerHTML)

        localStorage.setItem("list", JSON.stringify(items))
    })
    const list = document.querySelector("#todo-list")
    list.append(itemElement)
}

items.forEach(function (item) {
    addItem(item)
})


button.addEventListener("click", function (e) {
    // get text from input
    const input = document.querySelector("#input")
    items.push(input.value)
    addItem(input.value)
})

