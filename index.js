

function findMatching(arrayOfDriversNames,name){
    let results = arrayOfDriversNames.filter(function(driver){
        if(driver === name || driver === name.toLowerCase()){
            return name
        }
    }) 
     return results};


     function fuzzyMatch(arrayOfDriversNames, startingLetters){
        let results = arrayOfDriversNames.filter(function(anIndividualDriverName){
                if(anIndividualDriverName.startsWith(startingLetters)){
                    return anIndividualDriverName
                }
            });
     return results};

     function matchName(arrayOfDriverObjs,aNameOfDriver){
        let results = arrayOfDriverObjs.filter(
            function(driverObj){
                console.log(driverObj)
                if(driverObj.name === aNameOfDriver){
                    return driverObj
                }
            })
        return results};