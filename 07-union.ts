let num: number | string = 123;

num = "123";

type User = {
  name: string;
  id: number;
};

type Admin = {
  adminName: string;
  id: number;
};

let userRole: User | Admin = {
  adminName: "Prayag",
  id: 22,
};

function getDatabaseId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id = id + 2;
  }
  console.log(id);
}

getDatabaseId(123);
getDatabaseId("Db_id");

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string)[] = [1, 2, "3"];

// NOTE: Much more strict type checking
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"; // ERRORF

export {}