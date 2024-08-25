export type Result<T> = T | Error;

export const isError = <T>(result: Result<T>): result is Error => { 
  return result instanceof Error;
}
export const isOk = <T>(result: Result<T>): result is T => {  
  return !isError(result);
}
export const unwrap = <T>(result: Result<T>): T => { 
  if (isError(result)) {
    throw result;
  }
  return result;
}
