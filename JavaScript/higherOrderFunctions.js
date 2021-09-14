var array = [100, 10, 56, 20, 34, 53, 67, 69];

var newArray = array.map(function(val) {
    return val + 5
});

var evenArray = array.filter(function(val) {
    return val % 2 == 0
});

var sortedArray = array.sort();

console.log(newArray)