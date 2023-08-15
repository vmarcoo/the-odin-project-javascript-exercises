const palindromes = function (string) {
    
    const string1 = string.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
    const string2 = string1.split("").reverse().join("");
   
    if (string2 === string1){
        return true;
    }

    return false;    
};

// Do not edit below this line
module.exports = palindromes;
