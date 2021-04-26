const arya = {
    name: "Arya Stark",
    details: {
        origin: "Winterfell",
        allegiance: "House Stark"
    }
};

// accessing the origin property directly through nested .property syntax

const aryaOrigin = arya.details.origin;

console.log(aryaOrigin);

// Accessing the origin property through nested destructuring syntax

const { details: { origin } } = arya;

console.log(origin);