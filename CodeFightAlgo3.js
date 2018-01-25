/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/

function adjacentElementsProduct(inputArray) {
    var largeNumber = inputArray[0]*inputArray[1];
    
    for (var i = 0; i < inputArray.length -1; i++) {
        if (inputArray[i]*inputArray[i+1] > largeNumber) {
            largeNumber = inputArray[i]*inputArray[i+1];
        }
    }
    return largeNumber;
}