function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function userSignUp(name: string, email: string, password: string) {
  return { name, email, password };
}

let userLogin = (
  email: string,
  password: string,
  isLogged: boolean = false
) => {
  return { email, password, isLogged };
};

addTwo(5);
getUpper("hello");
userSignUp("Prayag", "anandvishy387@gmail.com", "123");

export {};
