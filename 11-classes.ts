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
  private _courseCount = 1;
  constructor(
    public name: string,
    public email: string // private userId: string
  ) {
    this.name = name;
    this.email = email;
  }

  private deleteToken(): void {
    console.log("Token deleted");
  }

  // NOTE: Getter
  get googleEmailId(): string {
    return `${this.email}@google.com`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // NOTE: Setter
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

const user = new User("pb123@gmail.com", "prayag");
export {};
