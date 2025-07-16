/**
 * Class as Type and Value
 */

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name}가 짖습니다.`;
  }
}

let ori = new Dog("오리"); // Dog 타입을 선언한 적 없지만 class자체가 type이 되었음
console.log(ori.bark());

// ori = "오리";
ori = {
  name: "별이",
  bark() {
    return `${this.name}가 짖습니다.`;
  },
};

console.log(ori);
