/**
 * 메서드 데코레이터
 */

class Idol {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @TestMethodDecorator
  @Configurable(false)
  @MethodCallLogger("prod")
  dance() {
    return `${this.name} is dancing`;
  }
}

// target  = static method에 데코레이팅을 할 경우 생성자 함수
//         = instance method에 데코레이팅을 할 경우 인스턴스의 prototype
// propertyKey = 데코레이팅 된 메서드의 이름
// descriptor = property descriptor
function TestMethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("----target----");
  console.log(target);
  console.log("----propertyKey----");
  console.log(propertyKey);
  console.log("----descriptor----");
  console.log(descriptor);
  console.log("--------------------------------");
}

const rose = new Idol("Rose");

// 메서드를 선언할때 decorator 가 실행

console.log("-----run dance ----");
rose.dance();

function Configurable(configurable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = configurable;
  };
}

console.log(Object.getOwnPropertyDescriptor(Idol.prototype, "dance"));

function MethodCallLogger(env: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`${env} method call logging... ${propertyKey}`);
      return originalMethod.apply(this, args);
    };
  };
}
