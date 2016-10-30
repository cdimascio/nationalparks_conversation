import dotenv from 'dotenv';
import * as path from 'path';
import {configure} from 'bunyan-node-logger';
dotenv.config();
configure({
  appId: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

const env = process.env;

export const config = {
  appId: env.APP_ID || 'myapp',
  root: path.normalize(__dirname + '/../..'),
  port: env.PORT || 3000
};
export default config;