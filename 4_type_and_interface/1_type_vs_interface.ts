/**
 * Type vs Interface
 */

// Object 선언할 때
interface Object {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// Function 선언할 때
interface Function {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는할 수 있지만
 * Interface에서는 할 수 없는 것
 */

// 1) primitive 타입 선언하기
type Name = string;

// 2) union 타입 선언하기
type UnionType = string | number;

// 3) primitive list 또는 tuple 타입 선언하기
type TupleType = [string, number];

/**
 * Interface에서는 할 수 있지만
 * Type에서는 할 수 없는 것
 */

// 1) interface merging
interface Rectangle {
  height: number;
}

interface Rectangle {
  width: number;
}

// 중복선언하면 합쳐진다
let rectangle: Rectangle = {
  height: 10,
  width: 20,
};

type TRectangle = {
  height: number;
};

// type은 애초에 중복선언 불가
// type TRectangle = {
//   width: number;
// }

/**
 * Interface Merging
 */

class Review {
  // 프로퍼티
  getY = (x: number) => {
    return x;
  };

  // 메서드
  getX(x: number) {
    return x;
  }
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}
// 프로퍼티는 오버로딩이 안된다.
interface GetXnY {
  getX: (x: number) => number;
  //   getY: (y: string) => number;
}

// 메서드는 오버로딩이 가능하다.
interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}
interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number;
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    return 1;
  },
};
