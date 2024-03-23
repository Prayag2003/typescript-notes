const enum SeatChoice {
  WINDOW = 5, // changing the default value from 0 to 5
  AISLE,
  MIDDLE = "middle",
  FOURTH = 4,
}

const prayagSeat = SeatChoice.WINDOW;

// under the hood, enums produce IIFEs in JavaScript, which maybe complex.
// using ```const``` keyword with ```enum``` is a good practice.

export {};
