/**
 * loop holes of any
 */
let number: number;
number = 10;

// number.toUpperCase();
// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};

let args1: any = "수진";
let args2: any = true;

// multiplyTwo(args1, args2);

let iu: any = { name: "아이유", age: 30 };
iu;

const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x);
};

const callback = (x: number, y: number) => {
  return x + y;
};

console.log(callbackRunner(1, 4, callback));
