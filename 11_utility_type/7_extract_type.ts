/**
 * Extract Type
 */

type stringOnly = Extract<string | boolean | number, string>;

type functonOnly = Extract<string | (() => void), Function>;

type stringNumber = Extract<string | boolean | number, string | number>;
