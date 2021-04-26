const fruits = ["Apple", "Orange", "Pear", "Grape"];

// Destructure all array elements into variables

const [a, b, c, d] = fruits;

console.log(a, b, c, d);

// Destructure first and third elements into variables

const [e, , f] = fruits;

console.log(e, f);

// Destructure first element and the rest of the elements into variables

const [g, ...h] = fruits;

console.log(g, h);