//5. What is the difference between for-of and for-in show with examples

//for-of loop iterates over names

//for-in loop iterates through property values directly
let employee = {name:"Mark", salary:250000, position:"Dev", email:"mtarasov@gmail.com"}; 

for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(`${key}  ${element}`)
     }
 }