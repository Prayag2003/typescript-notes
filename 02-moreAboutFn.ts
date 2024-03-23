function getValue(myVal: number): boolean | string {
  if (myVal > 10) {
    return true;
  } else {
    return "200 OK";
  }
}

const heros = ["Ironman", "Batman", "Spiderman"];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(err: string): void {
  console.log(err);
}

// NOTE: To handle errors, use NEVER
function throwError(msg:string): never {
  throw new Error(msg);
}