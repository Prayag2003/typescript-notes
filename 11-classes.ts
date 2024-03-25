// class User {
//   name: string;
//   email: string;
//   city: string;
//   constructor(email: string, name: string) {
//     this.name = name;
//     this.email = email;
//   }
// }

// NOTE: Much more cleaner way to write in Ts
class User {
  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}
}

const user = new User("pb123@gmail.com", "prayag", "123");
export {};
