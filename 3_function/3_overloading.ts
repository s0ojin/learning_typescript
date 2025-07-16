/**
 * Overloading
 */
/**
 * 파라미터를
 * 1. 하나를 받거나
 * 2. 3개를 받는 함수
 */

function stringOrStrings(members: string): string;
function stringOrStrings(
  member1: string,
  member2: string,
  member3: string
): string;
// 구현체와 완전 다른 내용 쓰면 오류가 발생함
// function stringOrStrings(
//   member1: string,
//   member2: string,
//   member3: string
// ): number;

/**
 * 만약 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) '안유진, 장원영, 리즈'
 * 만약 3개의 파라미터를 입력받는다면
 * 아이돌 멤버들을 각각 입력받는다.
 * 예) '안유진', '장원영', '리즈'
 */
function stringOrStrings(
  memberOrMembers: string,
  member2?: string,
  member3?: string
) {
  if (member2 && member3) {
    return `${memberOrMembers}, ${member2}, ${member3}`;
  }
  return memberOrMembers;
}

console.log(stringOrStrings("안유진", "장원영", "리즈"));
console.log(stringOrStrings("안유진, 장원영, 리즈"));
// console.log(stringOrStrings("안유진", "장원영")); //안유진

// 오버로딩 시그니처는 JS에서 지원되지않으므로 가능하면 사용을 지양하는 것이 좋음
