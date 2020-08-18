import commandExists from 'command-exists';
import { commandNotFound } from './error';

export const confirmCommandExistence = (...commands: string[]) => {
  commands.forEach((command): void => {
    commandExists(command).catch(() => {
      commandNotFound(command);
    });
  });
};
