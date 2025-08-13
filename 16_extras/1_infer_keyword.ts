/**
 * Infer Keyword
 *
 *(Inferring Type in Conditional Type)
 * Infer Keyword는 조건부 타입에서 사용되는 키워드
 * extends 키워드를 사용했을때 extend한 대상에서 타입을 한번 더 추론하는 역할
 */

//  1) 가장 많이 사용하는 예제
//  Flattening -> Array 를 벗길때
// string[] -> string
// string[][] -> string[]

// type Flatten<Type> = Type extends Array<string> ? string : Type;
// type StringArray = Flatten<string[]>;
// type NumberArray = Flatten<number[]>;

// type Flatten<Type, Element> = Type extends Array<Element> ? Element : Type;
// type StringArray = Flatten<string[], string>;
// type NumberArray = Flatten<number[], number>;

type Flatten<Type> = Type extends Array<infer Element> ? Element : Type;
type Flatten2<Type> = Type extends (infer Element)[] ? Element : Type;

type StringArray2 = Flatten2<string[]>;
type NumberArray2 = Flatten2<number[]>;
type TwoDArray = Flatten2<boolean[][]>;

// 2) Return Type 추론
// type InferReturnType<Type> = Type extends (...args: any[]) => string
//   ? string
//   : Type;
type InferReturnType<Type> = Type extends (...args: any[]) => infer ReturnType
  ? ReturnType
  : Type;

type NumberArray = InferReturnType<number[]>;
type StringFunc = InferReturnType<() => string>;
type NumberFunc = InferReturnType<() => number>;
