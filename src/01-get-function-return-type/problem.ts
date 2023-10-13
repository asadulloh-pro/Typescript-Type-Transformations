import { Equal, Expect } from "../helpers/type-utils";

const functionName = () => {
  return "hello";
};

/**
 * How do we extract FuncReturn from functionName?
 */
type FuncReturn = unknown;

type tests = [Expect<Equal<FuncReturn, string>>];