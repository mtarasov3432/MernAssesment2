//3. Print the last name through destructuring and add a contact number:9119119110 as well
 const person = {
     userDetails :{
         first: "FirstName",
         last: "LastName"
     }
 }

 let {userDetails : {first, last, contactNumber = 9119119110}} = person
console.log(first)
console.log(last)
console.log(contactNumber)