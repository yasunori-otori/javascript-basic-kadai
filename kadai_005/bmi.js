const weight = "68kg"
const weightNumber = parseInt(weight, 10);

const height = '1.7m'
const heightNumber = parseFloat(height);

const bmi = weightNumber / (heightNumber * heightNumber);

console.log(bmi);