//4. Give me an example of const data manipulation

//cannot reassign const variables but can manipulate the data by updating, deleting, and adding elements

const foods = ["burger", "hotdog", "pizza", "pasta"]

foods[1] = "apples"
foods.pop()
foods.push("curry")

console.log(foods)