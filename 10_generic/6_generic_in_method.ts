/**
 * Method에서 Generic 사용하기
 */

class Idol<T> {
  id: T;
  name: string;

  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello<Time>(logTime: Time) {
    return `${logTime} : Hello, my name is ${this.name}`;
  }
}

const yujin = new Idol("a999", "안유진");

yujin.sayHello("2024");
yujin.sayHello(2024);

class Message<T> {
  sayHello<Time>(logTime: Time, message: T) {
    console.log(`logTime: ${typeof logTime}, message: ${typeof message}`);
  }
}

const message = new Message<string>();
message.sayHello<number>(2000, "hello");

// 타입이름 같으면 메서드 제너릭 우선시됨. 애초에 헷갈리니까 타입이름 다르게 해야함.
class DuplicatgedGenericName<T> {
  sayHello<T>(logTime: T) {
    console.log(`logTime: ${typeof logTime}`);
  }
}

const duplicate = new DuplicatgedGenericName<string>();
duplicate.sayHello<number>(2000);
