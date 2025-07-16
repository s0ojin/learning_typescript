/**
 * Intersection Basics
 *
 * And개념
 */

interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

// 모두 포함된 새로운 타입..!
type HumanAndContacts = Human & Contacts;

// let humanAndContacts: HumanAndContacts = {
//   name: "박수진",
//   age: 29,
// };

let humanAndContacts: HumanAndContacts = {
  name: "박수진",
  age: 29,
  phone: "010-1234-5678",
  address: "대한민국",
};

// primitive 타입을 intersection하면 never로 추론함
type NumberAndString = number & string;

// let numberAndString: NumberAndString = undefined;

// never는 js에 존재하지 않으므로 할당할 수 없음
// let numberAndString: NumberAndString = never;
