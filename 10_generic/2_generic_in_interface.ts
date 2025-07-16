/**
 * Generic in Interface
 */

interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

const cache1: Cache<string> = {
  data: ["123", "456"],
  lastUpdate: new Date(),
};

// 함수와 다르게 타입 유추 못하고 명시적으로 타입 선언해줘야함
// const cache2: Cache = {
//   data: [123, 456],
//   lastUpdate: new Date(),
// };

interface DefaultGeneric<T = string> {
  data: T[];
}

// 기본값을 넣었기때문에 명시적 타입 선언 안해도 됨
const cache3: DefaultGeneric = {
  data: ["123", "456"],
};
