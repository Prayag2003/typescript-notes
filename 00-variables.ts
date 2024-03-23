let greetings: string = "Hello World";
greetings.toLowerCase();
console.log(greetings);

// NOTE: number
let userId: number = 123;
console.log(userId.toFixed(10));
console.log(userId.toExponential(4));
console.log(
  userId.toLocaleString("en-US", { style: "currency", currency: "USD" })
);

// NOTE: boolean
let isLoggedIn: boolean = true;

export {};
