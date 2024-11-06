//14. Create an example of generator function of your choice

 function *generator() {
     yield "1'st"
     yield "2'nd"
     yield "3'rd"
     return "Execution done"
     yield "Unreachable"
 }

 let myGenarator = generator()

 console.log(myGenarator.next())
 console.log(myGenarator.next())
 console.log(myGenarator.next())
 console.log(myGenarator.next())
 console.log(myGenarator.next())
 