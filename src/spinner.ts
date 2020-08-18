import cliSpinners, { Spinner, dots } from 'cli-spinners';
import clc from 'cli-color';

export const getRandomSpinner = () => {
  const spinnerValues: Spinner[] = Object.values<Spinner>((cliSpinners as unknown) as Record<string, Spinner>);
  return spinnerValues[Math.floor(Math.random() * spinnerValues.length)];
};

export class SpinnerHandler {
  private spinner: Spinner;
  private text: string;
  private spin: number;
  private intervalHandler: NodeJS.Timeout | null;
  constructor(spinner?: Spinner) {
    this.spinner = spinner || dots;
    this.text = '';
    this.spin = 0;
    this.intervalHandler = null;
  }
  start() {
    if (this.intervalHandler !== null) {
      return;
    }
    this.intervalHandler = setInterval(this.updateSpinner.bind(this), this.spinner.interval);
  }
  stop() {
    if (this.intervalHandler === null) {
      return;
    }
    clearInterval(this.intervalHandler);
  }
  done() {
    if (this.intervalHandler !== null) {
      clearInterval(this.intervalHandler);
    }
    process.stdout.write(clc.erase.line + clc.move.left(9999));
    process.stdout.write(clc.green('✔ ') + this.text + '\n' + clc.green('✔ ' + 'Initialization completed') + '\n');
    return;
  }

  setText(text: string) {
    if (this.intervalHandler !== null) {
      process.stdout.write(clc.erase.line + clc.move.left(9999));
      process.stdout.write(clc.green('✔ ') + this.text + '\n');
    }
    this.text = text;
  }

  write() {
    process.stdout.write(clc.erase.line + clc.move.left(9999));
    process.stdout.write(`${this.spinner.frames[this.spin % this.spinner.frames.length]} ${this.text}`);
  }
  updateSpinner() {
    this.write();
    this.spin++;
  }
}
