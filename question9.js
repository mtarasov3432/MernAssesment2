//9. Create two objects with some properties and merge them using Object method and ES6 way

const obj1 = {a:1,b:2,c:3}
const obj2 = {d:4,e:6}

const merged = Object.assign(obj1,obj2)

console.log(merged)

const obj3 = {f:7, g:8}
const obj4 = {h:9,i:10}

const merged1 = {...obj3,...obj4}

console.log(merged1)