#!/usr/bin/env node

import prompts from 'prompts';
import { confirmCommandExistence } from './utils';
import { presets } from './constants';
import { react, express, express_mongo } from './presets';
import { SpinnerHandler } from './spinner';

export const spinner = new SpinnerHandler();

const init = async () => {
  confirmCommandExistence('node', 'npm', `tsc`);
  const response = await prompts([
    {
      message: 'Which preset will you use?',
      type: 'select',
      name: 'preset',
      choices: [
        {
          title: 'React',
          value: presets.react,
        },
        {
          title: 'Express',
          value: presets.express,
        },
        {
          title: 'Express + Mongoose',
          value: presets.express_mongo,
        },
      ],
    },
  ]);
  switch (response.preset) {
    case presets.react:
      await react();
      break;
    case presets.express:
      await express();
      break;
    case presets.express_mongo:
      await express_mongo();
      break;
  }
};

init().catch((err) => console.log(err));
