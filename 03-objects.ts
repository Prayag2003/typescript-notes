function createUser({ name: string, isPaid: boolean }) {}

// NOTE: Gives Error
// createUser({ name: "John Doe", isPaid: true, email: "abc" });

// NOTE: The same thing is error free 
// Bad behvaiour of objects
let user = { name: "John Doe", isPaid: true, email: "abc" };
createUser(user);
