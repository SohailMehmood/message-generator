// Arrays to store different parts of the message
const firstPart = ["Believe in yourself", "You are capable of amazing things", "Every day is a new opportunity"];
const secondPart = ["and never give up", "and keep pushing forward", "and stay positive"];
const thirdPart = ["because great things take time.", "because you are stronger than you think.", "because success is within reach."];

// Function to generate a random index
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

// Function to generate a random message
const generateMessage = () => {
    const part1 = firstPart[getRandomIndex(firstPart)];
    const part2 = secondPart[getRandomIndex(secondPart)];
    const part3 = thirdPart[getRandomIndex(thirdPart)];
    return `${part1} ${part2} ${part3}`;
};

// Output the generated message
console.log(generateMessage());