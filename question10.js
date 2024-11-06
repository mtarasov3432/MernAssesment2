//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
const foodStock = new Map([["burgers",500]])
console.log(foodStock.set("hotdogs", 600))
console.log(foodStock.get("hotdogs"))
foodStock.clear()
console.log(foodStock)