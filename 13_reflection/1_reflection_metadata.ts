/**
 * Reflection Metadata
 */

import "reflect-metadata";

const iu = {
  name: "아이유",
  age: 30,
  nationality: "한국",
};

console.log(iu);

/**
 * 파라미터의 정의
 *
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티
 *
 * 4는 필수가 아니다
 *
 * 메타데이터란? 데이터에 대한 데이터
 */

Reflect.defineMetadata("test-meta", 123, iu);

console.log(iu); // js코드 내에선 보이지않는다

console.log(Reflect.getMetadata("test-meta", iu));

Reflect.defineMetadata("test-meta", 456, iu);
console.log(Reflect.getMetadata("test-meta", iu));

Reflect.defineMetadata("meta2", { name: "코드팩토리" }, iu);
console.log(Reflect.getMetadata("meta2", iu));

/**
 * 프로퍼티에 저장하기
 */

Reflect.defineMetadata("meta3", "수진", iu, "name");

console.log(Reflect.getMetadata("meta3", iu));
console.log(Reflect.getMetadata("meta3", iu, "name"));

Reflect.deleteMetadata("meta3", iu, "name");
console.log(Reflect.getMetadata("meta3", iu, "name"), "삭제되었나??");
console.log(Reflect.hasMetadata("meta3", iu, "name"));

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getMetadataKeys(iu, "name"));

Reflect.defineMetadata(
  "prototype-date",
  "프로토타입 메타!",
  Object.getPrototypeOf(iu)
);

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getOwnMetadataKeys(iu));
