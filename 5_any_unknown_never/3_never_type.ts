/**
 * Never type
 */

// 1) 함수에서 에러를 던질때
function throwError(): never {
  throw Error();
}

// 2) 무한루프
function infiniteLoop(): never {
  while (true) {}
}

// 3) 존재할 수 없는 인터섹션
type StringAndNumber = string & number;

// let neverType: never = 10;
// let neverType: never = undefined;
// let neverType: never = null;
