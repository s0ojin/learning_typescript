/**
 * Extension
 */

interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "안유진",
  age: 20,
};

type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "장원영",
  age: 20,
};

// type을 extension할 수도 있음
interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: "제니",
  age: 20,
};

// interface를 intersection할 수도 있음
type TIdol2 = IName & {
  age: number;
};

const idol4: TIdol2 = {
  name: "민지",
  age: 20,
};

/**
 * extending multiple
 */

type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "초코",
  age: 2,
  breed: "말티즈",
};

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: "나비",
  age: 2,
  breed: "러시안 블루",
};

/**
 * Overriding
 */

type THeight = {
  height: number;
};

type TRectangle = THeight & {
  height: string;
  width: number;
};

// const rectangle: TRectangle = {
//     height: 10, nevertype => number & string이므로...
//     width: 20,
// }

//아래처럼 narrowing할 때 유용
type TWidth = {
  width: number | string;
};

type TRectangle2 = TWidth & {
  width: number;
  height: number;
};

const rectangle: TRectangle2 = {
  width: 10,
  height: 20,
};

interface IHeight {
  height: number;
}

// type은 never가 나오는 경우에도 extend 가능함
// interface는 애초에 에러발생시킴

// interface IRectangle extends IHeight {
//   height: string;
//   width: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number | string;
  height: number;
}
