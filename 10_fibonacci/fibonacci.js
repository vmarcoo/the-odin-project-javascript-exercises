const fibonacci = function(num) {
if (num < 0){
    return "OOPS"
};

let array = [1];
let initial = 0;
let second = 1;

for (let i = 1; i < num; i++){
    let current = initial + second;
    initial = second
    second = current;
    array.push(current);
}
return Number(array.slice(-1).toString());
};
// Do not edit below this line
module.exports = fibonacci;
