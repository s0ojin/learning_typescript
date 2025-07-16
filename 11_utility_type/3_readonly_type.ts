/**
 * Readonly Type
 */

interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: "냐옹이",
  age: 8,
};

nyaong.name = "냐옹이2";

const bori: Readonly<Cat> = {
  name: "보리",
  age: 1,
};

// bori.name = "보리2";

Object.freeze(bori);
