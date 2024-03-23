type User = {
  readonly _id: [string];
  name: string;
  age: number;
  email: string;
  creditCard?: number;
};

let myUser: User = {
  _id: ["123"],
  name: "P",
  age: 10,
  email: "pb@gmail.com",
};

myUser.age = 11;
console.log(myUser);
myUser._id.push("124", "234");
console.log(myUser);
