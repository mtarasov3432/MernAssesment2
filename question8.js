//8. create an example showing usage of short hand and default param.

let continent = "North America", country = "USA", state = "Virginia"

let address = {
    continent:continent,
    country:country,
    state:state
}

console.log(address)

let address1 = {
    continent,
    country,
    state
}

console.log(address1)
