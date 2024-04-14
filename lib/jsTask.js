// task1
const a1 = [1, 3, 5, 2, 4];
const result = a1.filter((element, index) => index % 2 === 0);
console.log(result);
// O(n)




// task2
const a2 = [1, 3, 5, 2, 4];
const result2 = a2.map(element => element ** 2);
console.log(result2)
// O(n)




// task3
const a3 = [1, 3, 5, 2, 4];
// Generate the result3 array by combining the squared odd and even elements
const result3 = [
    // Use filter and map to handle odd elements
    // Filter odd elements (element % 2 !== 0)
    // Then, map each odd element to its square (element ** 2)
    ...a3.filter(element => element % 2 !== 0)
        .map(element => element ** 2),

    // Use filter and map to handle even elements
    // Filter even elements (element % 2 === 0)
    // Then, map each even element to its square (element ** 2)
    ...a3.filter(element => element % 2 === 0)
        .map(element => element ** 2)
];

console.log(result3); // Output: [1, 25, 16] 
// O(n)


// task 3.1
const a4 = [1, 3, 5, 2, 4];
const oddSquares = [];
const evenSquares = [];

a4.forEach(element => {
    const squaredElement = element ** 2;
    if (element % 2 !== 0) {
        // If odd, push squared element to oddSquares
        oddSquares.push(squaredElement);
    } else {
        // If even, push squared element to evenSquares
        evenSquares.push(squaredElement);
    }
});

// Concatenate oddSquares and evenSquares to form result3
const result31 = [...oddSquares, ...evenSquares];

console.log(result31);