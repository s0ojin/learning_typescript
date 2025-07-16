/**
 * Types
 */

let helloText: string = "Hello";
// helloText = true;

/**
 *  7 타입
 */

const stringVar: string = "String";
const numberVar: number = 1;
const bigIntVar: bigint = BigInt(9999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */

// any - 아무타입이나 입력가능한 치트키
let anyVar: any;
anyVar = 100;
anyVar = "hello";
anyVar = true;

// any는 다른 타입에 모두 할당할 수 있음
let testNumber: number = anyVar;
let testString: string = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = "hello";
unknownType = true;

// unknown은 다른 타입에 할당할 수 없음
let testNumber2: number = unknownType;
let testString2: string = unknownType;

// never - 어떠한 값도 저장되거나 반환되지 않을 때
let neverType: never = null;
let neverType: never = undefined;
let neverType: never = "string";

/**
 *  리스트타입
 */
const koreanGirlGroup: string[] = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList: boolean[] = [true, false, true];
