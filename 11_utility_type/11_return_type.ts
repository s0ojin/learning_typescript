/**
 * Return Type
 */

type ReturnTypeSample = ReturnType<() => string>;

type FunctionSign = (a: number, b: number) => number;

type ReturnType2 = ReturnType<FunctionSign>;
