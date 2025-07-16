/**
 * casting
 *
 * TS에서 Casting을 하면 JS에서 적용이 안된다.
 */

let codefactory = "code factory";
let testNumber = 10;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());

let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // number라고 찍힘

let number = 5;
console.log((number as any).toUpperCase());
// 상속상에서 더 구체화된 값으로 캐스팅할때 as를 사용하는게 좋은 예
// as any 하면 ts쓰는 의미도 없고,실제 JS실행 시 타입이라 코딩할때 타입을 다르게 가져가버리면 안됨
