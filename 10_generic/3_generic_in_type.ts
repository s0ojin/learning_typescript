/**
 * Generic in Type
 */

type GenericSimpleType<T> = T;

// 타입 명시해야함
const genericSimpleType: GenericSimpleType<string> = "123";
// const genericSimpleType2: GenericSimpleType = 123;

interface DoneState<T> {
  data: T[];
}

interface LoadingState {
  requestedAt: Date;
}

interface ErrorState {
  error: string;
}

type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
  data: ["123", "456"],
};

state = {
  requestedAt: new Date(),
};

state = {
  error: "error",
};

let state2: State = {
  data: ["123", "456"],
};
