// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]

// Answer:
function partsSums(ls) {
    let arr = [0];
    ls.reverse().forEach(num => arr.push(arr[arr.length - 1] + num));
    return arr.reverse();
};

// What's happening?
// We first create a function that accepts an array
// We first create a new array that we will return later
// we then reverse the array we accept as an arg, then loop through it
// for each iteration we push a new value onto the arr array
// the new value is the last elemnet in the arr array added with the current num for the iteration, which should be the sum of the previous part
// the we reverse the arr and return it