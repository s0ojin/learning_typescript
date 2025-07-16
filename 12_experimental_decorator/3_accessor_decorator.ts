/**
 * 접근자 데코레이터
 */

class Rectangle {
  #height: number;
  #width: number;

  constructor(height: number, width: number) {
    this.#height = height;
    this.#width = width;
  }

  get height() {
    return this.#height;
  }

  @Configurable(false)
  get width() {
    return this.#width;
  }
}

function Configurable(configurable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = configurable;
  };
}

const rect = new Rectangle(10, 20);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
