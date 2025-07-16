/**
 * Property Check
 *
 * 초과 속성 검사
 */

type TName = {
  name: string;
};

type TAge = {
  age: number;
};

const iu = {
  name: "아이유",
  age: 30,
};

// 초기값 할당할 때 초과속성 검사 안되는 모습 -> 초기에 값 넣어줄땐 정확하게..!
const testName: TName = iu;
const testAge: TAge = iu;
