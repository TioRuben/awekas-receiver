export const logError = (msg: string, parameter?: unknown) => {
  parameter !== undefined
    ? console.log(`ERROR: ${Date().toLocaleLowerCase()}`, msg, parameter)
    : console.log(`ERROR: ${Date().toLocaleLowerCase()}`, msg);
};
