type User = {
  name: string;
  email: string;
  age: number;
};

function createUser(user: User): User {
  return { name: " ", email: " ", age: 10 };
}

createUser({ name: " ", email: " ", age: 10 });
