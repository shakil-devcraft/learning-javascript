(function(a, b){
    console.log(a + b);
})(5, 6)


// arrow iife
let sum = ((x, y) => {
    return (x + y);
})(6, 3)

console.log(sum);