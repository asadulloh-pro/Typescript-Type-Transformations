import { Equal, Expect } from "../helpers/type-utilis";

const functionName = () => {
  return "hello";
};

/**
 * How do we extract FuncReturn from functionName?
 */
type FuncReturn = ReturnType<typeof functionName>;

type tests = [Expect<Equal<FuncReturn, string>>];