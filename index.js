const allDrivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//const findMatching = (names)=>nameOfDrivers.filter(name => nameOfDrivers);

function findMatching(drivers,name){
let results = drivers.filter(function(driver){
    if(driver === name || driver === name.toLowerCase()){
        return name
    }
}) 
 return results}


//console.log(typeof findMatching)