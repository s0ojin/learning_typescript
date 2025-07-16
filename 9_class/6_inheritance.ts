/**
 * 상속
 * 
 */

class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(`Parent: ${this.name} is dancing`);
    }
}

class Child extends Parent {
    age: number;

    constructor(name: string, age:number) {
        super(name);
        this.age = age;
    }

    sing() {
        console.log(`Child: ${this.name} is singing`);
    }
}

const codefactory = new Parent("codefactory");
const ahri = new Child("ahri", 20);

codefactory.dance();
// codefactory.sing();

ahri.dance();
ahri.sing();


let person: Parent;
person = codefactory;
person = ahri;

let person2: Child;
person2 = ahri;
// person2 = codefactory;

/**
 * 부모가 자식에 할당 안되는건 당연하지만, 타입스크립트에서 가능하게 할 수 있음
 * optional 프로퍼티를 유의하자
 */
class Parent2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Child2 extends Parent2 {
    age?: number;

    constructor(name: string, age?: number) {
        super(name);
        this.age = age;
    }
}

const cf2 = new Parent2("codefactory");
const ahri2 = new Child2("ahri", 20);

let child: Child2;
child = ahri2;

// age가 옵셔널이라 부모를 자식에 입력할 수 있게됨
// 구조가 같다면 할당할 수 있는 모습
child = cf2;







