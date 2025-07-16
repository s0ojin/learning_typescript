/**
 * Partial Type
 */

interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yuJin: Idol = {
  name: "안유진",
  age: 20,
  groupName: "아이브",
};

function updateIdol(original: Idol, updates: Partial<Idol>) {
  return {
    ...original,
    ...updates,
  };
}

console.log(
  updateIdol(yuJin, {
    age: 23,
    name: "안유진2",
  })
);
