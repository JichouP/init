export const commandNotFound = (command: string): void => {
  throw new Error(`Command ${command} is not found. Please install ${command} before running this.`);
};
