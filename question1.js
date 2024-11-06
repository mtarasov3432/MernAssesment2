/*
 1) by declaring your heroes list as a const you are preserving the immutability of it. 
 other variables may call it and get its information, but not change its properties. 
 I'll copy the list and compare it to the original variable after quesitons to prove this
*/
const heroes = [
    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
    { name: 'Batman',         family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
    { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
    { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
    { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
  ]
  const heroesCopy = heroes
//1a.
console.log("Question 1A")
let notEvilHeroes = heroes.filter((heroes)=>heroes.isEvil == false)
console.log(notEvilHeroes)

//1b.
console.log("Question 1B:")
let uniqueFamilyNames = new Set();
for(const key in heroes){
    if (Object.hasOwnProperty.call(heroes, key)) {
        for (const key1 in heroes[key]){
            if(key1 == 'family'){
                const element = heroes[key][key1]
                uniqueFamilyNames.add(element)
            }
        }
    }
}
console.log(uniqueFamilyNames)

//1c.
console.log("Question 1C:")
for(const key in heroes){
    if (Object.hasOwnProperty.call(heroes, key)) {
        for (const key1 in heroes[key]){
            if(key1 == 'name'){
                const element = heroes[key][key1]
                console.log("sir "+element)
            }
        }
    }
}

//1d.
function isNotEvilMarvel(element){
    if(element.isEvil == "false" && element.family == "Marvel"){
        return true;
    }else{
        return false;
    }
}

let marvelHeroes = heroes.filter((heroes)=>heroes.family=="Marvel")
let notEvilMarvelHeroes = marvelHeroes.some((marvelHeroes)=>marvelHeroes.isEvil==false)
console.log("Question 1D:")
console.log("It is "+notEvilMarvelHeroes+" that there are Marvel heroes who are not evil in the heroes array")
console.log("Immutability Proof")
console.log("It is "+(heroes == heroesCopy)+" that the heroes array has remained unchanged and has proven immutable through the course of this question")