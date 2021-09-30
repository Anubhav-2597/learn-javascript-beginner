//if a customer has more than 100 points,
// they are a gold customer, otherwise,
// they are a silver customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

//logical AND (&&)
console.log(true && true);
console.log(false && true);

//logical OR (||)
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan)

//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused',applicationRefused);

