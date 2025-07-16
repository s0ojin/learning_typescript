/**
 * Key Value Mapping
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
};

type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginateUsers: GlobalApiStatus["paginateUsers"];
  banUser: GlobalApiStatus["banUser"];
};

// 와우~~
type UserApiStatus3 = {
  [k in "getUser" | "paginateUsers" | "banUser"]: GlobalApiStatus[k];
};

// 원하는 키만 뽑아서 타입 생성
type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "paginateUsers" | "banUser"
>;

// 원하는 키만 제외하고 타입 생성
type OmitUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;

// const key: AllKeys = "new"
const key: AllKeys = "getUser";

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[k];
};

interface LoadingScreen {
  type: "loading";
  data: string[];
}

interface ErrorStatus {
  type: "error";
  message: string;
}

type FetchStatus = LoadingScreen | ErrorStatus;
type StatusType = FetchStatus["type"];
