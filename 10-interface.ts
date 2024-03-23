interface User {
  readonly dbId: number;
  name: string;
  age: number;
  email: string;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string): number;
}

const prayag: User = {
  dbId: 1,
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
