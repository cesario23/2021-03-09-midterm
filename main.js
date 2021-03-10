// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities (age){
    if (age < 16 ){
        return "You can't drive."
    }else if (age >= 16 && age <= 17){
        return "You can drive but not vote."
    }else if (age >= 18 && age <= 24){
        return "You can vote but not rent a car."
    }else {
        return 'You can do pretty much anything.'
    }
}

function oddIndices (array){
    let output = [];
    for (let i = 0; i < array.length; i++){
    if (array [i] % 2 !== 0){
       }
    }
    return output;
}

function numOddValues (array){
    let sumOddValues = 0;
 for (const char of array){
     if (char % 2 !== 0){ 
         sumOddValues += char;
     }
 }
 return sumOddValues;
}


function averageStringLength (arry){
let averageLengthStr = 0;
  for (const char of arry){
      const strLength = arry.length ();
    averageLengthStr = char / strLength 
  }
  return averageLengthStr;
 }


 function firstPunctuationIndex (str){
for (let i =0; i < str.length ; i++ ){
    
    if (i === '.' || i === '!' || i === "?"){
        break;
    
    }
    
}
 }

 function getPlace (list, grade){

 
 }




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
