/**
 * Abstract Class
 */


abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// 추상 클래스는 인스턴스화 할 수 없음
// const modelWithId = new ModelWithId(1);

class Product extends ModelWithId {}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
    abstract shout(name:string): string;
}

class Product2 extends ModelWithAbstractMethod {
    shout(name: string): string {
        return `${name}야 안녕`;
    }
}

const product2 = new Product2();
product2.shout("아이유");


