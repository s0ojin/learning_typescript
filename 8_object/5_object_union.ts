/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */

const dogOrCat =
  Math.random() > 0.5
    ? { name: "별이", age: 1 }
    : { name: "나비", breed: "코리안길냥이" };

dogOrCat.name; //string
dogOrCat.age; //number | undefined
dogOrCat.breed; //string | undefined

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat =
  Math.random() > 0.5
    ? { name: "별이", age: 1 }
    : { name: "나비", breed: "코리안길냥이" };

dogOrCat2.name;
// dogOrCat2.age;
// dogOrCat2.breed;

if ("age" in dogOrCat2) {
  dogOrCat2.age;
} else {
  dogOrCat2.breed;
}
