/*
Given an array of strings, return another array containing all of its longest strings.
*/
function allLongestStrings(inputArray) {
    var longArray = inputArray[0].length;
        for(var i = 0; i < inputArray.length; i++) {
            if(longArray < inputArray[i].length){
                longArray = inputArray[i].length;
            }
        }
        inputArray = inputArray.filter((element)=> {
           return element.length === longArray; 
        });
        return inputArray;
    }
    
    