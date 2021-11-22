export const logInfo = (msg: string, parameter?: unknown) => {
  parameter !== undefined
    ? console.log(`INFO: ${Date().toLocaleLowerCase()}`, msg, parameter)
    : console.log(`INFO: ${Date().toLocaleLowerCase()}`, msg);
};
