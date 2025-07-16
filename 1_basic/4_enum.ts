/**
 * Enum
 */

/**
 * API 요청을한다.
 * 상태는 4가지
 *
 * DONE - 요청완료
 * ERROR - 요청실패
 * LOADING - 요청중
 * INIT - 초기상태
 */

function runWork() {
  let state = "INIT";

  try {
    state = "LOADING";
    state = "DONE";
  } catch (error) {
    state = "ERROR";
  } finally {
    return state;
  }
}

console.log(runWork() === "DONE");
// console.log(runWork() === "DDONE");
// string으로 비교할 시 오타로인한 에러 발생가능성 존재

// 그래서 js에서는 변수에 할당해서 사용
const initState = "INIT";
const loadingState = "LOADING";
const doneState = "DONE";
const errorState = "ERROR";

function runWork2() {
  let state = initState;

  try {
    state = loadingState;
    state = doneState;
  } catch (error) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState);
// console.log(runWork2() === ddoneState);

// 할당안하면 0부터 시작
enum State {
  INIT = "INIT",
  LOADING = "LOADING",
  DONE = "DONE",
  ERROR = "ERROR",
}

function runWork3() {
  let state = State.INIT;

  try {
    state = State.LOADING;
    state = State.DONE;
  } catch (error) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3());
