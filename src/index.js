function saveValue(sum) {
    let count = 0;
    
        return function(val) {
            return count += val;
        }       
}

let sum = saveValue();

function counter(start, step) {
    let count = start - step;

    function some() {
        return count += step;
    }
    some.reset = function() {
        return count = start;
    }
    return some;
}

let calculator = counter(8, 4);



console.log(sum(3));
console.log(sum(6));
console.log(sum(30));

console.log(calculator());
console.log(calculator());
console.log(calculator());
console.log(calculator());