/**
 * Reflection과 Decorator
 */

import "reflect-metadata";

const restrictParamValueKey = Symbol("restrictParamValue");

interface RestrictionInfo<T> {
  index: number;
  restrictedValues: T[];
}

function RestrictParamValue<T>(restrictedValues: T[]) {
  return (target: any, propertyKey: string, index: number) => {
    const prevMeta =
      Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

    const info: RestrictionInfo<T> = {
      index,
      restrictedValues,
    };

    Reflect.defineMetadata(
      restrictParamValueKey,
      [...prevMeta, info],
      target,
      propertyKey
    );

    console.log(
      Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey)
    );
  };
}

function ValidateMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metas: RestrictionInfo<any>[] =
    Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

  const original = descriptor.value;

  descriptor.value = function (...args: any) {
    const invalids = metas.filter(
      (x) => !x.restrictedValues.includes(args[x.index])
    );

    if (invalids.length > 0) {
      throw new Error(
        `잘못된 값입니다. ${invalids.map((x) => args[x.index]).join(", ")}`
      );
    }

    return original.apply(this, args);
  };
}

class Idol {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @ValidateMethod
  sing(@RestrictParamValue(["신나게", "열정적으로"]) style: string) {
    // if (style !== "신나게" && style !== "열정적으로") {
    //   throw new Error("style은 신나게 또는 열정적으로만 가능합니다");
    // }

    return `${this.name} ${style} 노래를 부르다`;
  }
}

const yuJin = new Idol("안유진", 23);

console.log("----sing----");
console.log(yuJin.sing("신나게"));
console.log(yuJin.sing("열정적으로"));
console.log(yuJin.sing("기분좋게"));
