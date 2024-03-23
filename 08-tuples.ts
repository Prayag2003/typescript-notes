type tUser = [string, number];

let user: tUser = ["Prayag", 22];

let rgb: [number, number, number] = [255, 0, 0];

// Bad Behaviour ( in earlier versions of TypeScript )
const u: tUser = ["Prayag", 22];
// u.push(true); // This used to give an error

// Reference: https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array

export {}