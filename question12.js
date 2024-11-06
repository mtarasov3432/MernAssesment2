//12. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)

function multiplyNumbers(...numbers){
    let result = 1;
    for(let number of numbers){
        result = result * number;
    }
    return result;
}
console.log(multiplyNumbers(2,3))