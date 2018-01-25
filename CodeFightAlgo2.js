/*
Given the string, check if it is a palindrome.
*/

function checkPalindrome(inputString) {

    var palin = "";
    for (var i =inputString.length -1; i >= 0; i--) {
        palin += inputString[i];
    }
    if (palin === inputString) {
        return true;
    }
    else {
        return false;
    }
}