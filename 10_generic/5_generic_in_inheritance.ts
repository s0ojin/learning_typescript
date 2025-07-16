/**
 * 제네릭 클래스 상속
 */

class BaseCache<T> {
  data: T[] = [];
}

class StringCashe extends BaseCache<string> {}

const stringCache = new StringCashe();
stringCache.data;

class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
}

const genericChild = new GenericChild<string, string>("error");
genericChild.data;
genericChild.message;

/**
 * 제너릭의 inheritance
 */

interface BaseGeneric {
  name: string;
}

class Idol<T extends BaseGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

const yujin = new Idol({
  name: "안유진",
  age: 20,
});

/**
 * keyof 함께 사용하기
 */
const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

function objectParser<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const val = objectParser(testObj, "a");

/**
 * 1===2 ? true : false
 */

class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: "Female Idol" = "Female Idol";
}

class MaleIdol extends Idol2 {
  type: "Male Idol" = "Male Idol";
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol();
