/**
 * Generic in Implementation
 */

interface Singer<T, V> {
  name: T;
  sing(year: V): void;
}

class Idol implements Singer<string, number> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sing(year: number) {
    console.log(`${year}년도에 데뷔한 ${this.name}이 노래를 부릅니다.`);
  }
}

const yuJin = new Idol("안유진");
yuJin.sing(2004);

class Idol2<T, V> implements Singer<T, V> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }

  sing(year: V) {
    console.log(`${year}년도에 데뷔한 ${this.name}이 노래를 부릅니다.`);
  }
}

const wonYoung = new Idol2<string, number>("원영");
wonYoung.sing(2004);
