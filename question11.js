//11. Create a promise object that get resloved after two seconds and rejected after three. 
//Also it returns five ES6 features on resolved
let authPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            feature1: function feature1(){
                let car="drive",boat="float",plane="fly";
                let transportation={
                    car,
                    boat,
                    plane
                }
            },
            feature2: function feature2(){
                const heroes = [
                    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
                    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
                    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
                    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
                    { name: 'Batman',         family: 'DC Comics', isEvil: false }
                ]
                let notEvilHeroes = heroes.filter((heroes)=>heroes.isEvil == false)
                console.log(notEvilHeroes)
            },
            feature3: function feature3(){
                const heroes = [
                    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
                    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
                    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
                    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
                    { name: 'Batman',         family: 'DC Comics', isEvil: false }
                ]
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
            },
            feature4: function feature4(){
                const foodStock = new Map([
                    ["burgers",500]
                    ["hotdogs",1000]
                ])
            },
            feature5: function feature5(){
                let ob1 = {1:"one",2:"two"}
                let ob2 = {3:"three", 4:"four"}
                let merged = {...ob1,...ob2}
            }
        })
    }, 2000);

    setTimeout(() => {
        reject({
            status : "rejected",
        })
    }, 3000);
})

authPromise.then((data, error)=>{
    console.log(data) 
    console.log(error)
}) 
.catch((data, error)=>{ 
    console.log(data)
    console.log(error)
}) 

console.log(authPromise)

