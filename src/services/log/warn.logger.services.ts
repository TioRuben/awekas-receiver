export const logWarn = (msg: string, parameter?: unknown) => {
  parameter !== undefined
    ? console.log(`WARN: ${Date().toLocaleLowerCase()}`, msg, parameter)
    : console.log(`WARN: ${Date().toLocaleLowerCase()}`, msg);
};
