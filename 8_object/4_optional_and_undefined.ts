/**
 * Optional and Undefined Property
 */
interface Dog {
  name: string;
  age: number;
  // 종을 모르면 undefined
  breed?: string;
}

const byulE: Dog = {
  name: "별이",
  age: 1,
  breed: "포메라니안",
};

const Ori: Dog = {
  name: "별이",
  age: 1,
};

//optional로 선언하면 어차피 string|undefined가 되는데, 직접 undefined로 타입을 설정하면 안될까?
interface Cat {
  name: string;
  age: number;
  breed: string | undefined;
}

// 옵셔널이 아니면 무조건 값 직접 설정해야함
const nabi: Cat = {
  name: "나비",
  age: 2,
  breed: undefined,
};
