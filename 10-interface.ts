interface User {
  readonly dbId: number;
  name: string;
  age: number;
  email: string;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string): number;
}

// NOTE: Reopening of Interface => same as adding more attributes to the interface
interface User {
  address: string;
  githubToken?: string;
}

// NOTE: Inheritance
interface Admin extends User {
  role: "admin" | "superadmin";
}

const prayag: Admin = {
  dbId: 1,
  role: "superadmin",
  address: "Shaintan Gali, Khatra Mahal, Samshan ke saamne, Royal Circus",
  name: "Prayag",
  age: 30,
  email: "abc@gmail.com",
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (name: "vish64") => {
    return 64;
  },
};
