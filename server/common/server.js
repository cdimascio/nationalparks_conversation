import express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
import config from './config';
import Logger from 'bunyan-node-logger';

const app = new express();

export default class ExpressServer {
  constructor() {
    this._l = new Logger(this.constructor.name);
    app.set('appPath', config.root + 'client');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(config.sessionSecret));
    app.use(express.static(config.root + '/public'));
  }

  router(routes) {
    routes(app);
    return this;
  }

  listen(port = config.port) {
    const welcome = (port, msg) => () => this._l.info(msg,
      `up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}