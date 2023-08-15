const reverseString = function(string) {
    let splitStr = string.split("");
    let reverse = splitStr.reverse();
    let join = reverse.join("");
    return join
};

reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
