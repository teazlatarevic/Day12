// Only change code below this line
function sumFibonacci(num) {
    if (num === 1) {
        return num;
    } else if (num <= 0) {
        return 0;
    } else {
    return sumFibonacci(num-1) + sumFibonacci(num-2);
    }
}
// Only change code above this line

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(23));
console.log(sumFibonacci(5));
console.log(sumFibonacci(0));
module.exports = sumFibonacci;