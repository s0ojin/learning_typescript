/**
 * Nested Object
 */

type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const codefactory: NestedPerson = {
  identity: {
    name: "코드팩토리",
    age: 20,
  },
  nationality: "한국",
};

// 중첩객체는 따로 정의하는게 나을까?
// 에러발생 시 어디서 발생했는지 찾기 쉽다
// 여러타입으로 나눠 선언하는게 좋다..!
type TPerson = {
  itdentity: TPersonIdentity;
  nationality: string;
};

type TPersonIdentity = {
  name: string;
  age: number;
};

const iu: TPerson = {
  itdentity: {
    name: "아이유",
    age: 30,
  },
  nationality: "한국",
};

// Interface도 동일함
interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

const yuJin: IPerson = {
  identity: {
    name: "안유진",
    age: 23,
  },
  nationality: "한국",
};
