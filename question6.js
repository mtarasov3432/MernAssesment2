//6. Give me an example of bind and write its usage, comparison with arrow function

//.bind() can allow an object use another object's method or set the this varaible of the object

let obj = {name: "Mark"}

let greeting = function(a,b){
    return `${a} ${this.name} ${b}`;
}

let bound = greeting.bind(obj)

console.log(bound("Hello", "How are you?"))


bound = () => greeting.bind(obj);

console.log(bound("Hello", "How are you?"))
