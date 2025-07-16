"use strict";
/**
 * Types
 */
let helloText = "Hello";
// helloText = true;
/**
 *  7 타입
 */
const stringVar = "String";
const numberVar = 1;
const bigIntVar = BigInt(9999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무타입이나 입력가능한 치트키
let anyVar;
anyVar = 100;
anyVar = "hello";
anyVar = true;
// any는 다른 타입에 모두 할당할 수 있음
let testNumber = anyVar;
let testString = anyVar;
// unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = "hello";
unknownType = true;
// unknown은 다른 타입에 할당할 수 없음
let testNumber2 = unknownType;
let testString2 = unknownType;
// never - 어떠한 값도 저장되거나 반환되지 않을 때
let neverType = null;
let neverType = undefined;
let neverType = "string";
/**
 *  리스트타입
 */
const koreanGirlGroup = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList = [true, false, true];
