import Rx from 'rx';
import Logger from 'bunyan-node-logger';

export default class BaseController {
  constructor(logger) {
    this._l = logger ? logger : new Logger(this.constructor.name);
  }

  responseObserver(res, method, opts = { status: 500, type: 'json' }) {
    return Rx.Observer.create(
      r => opts.type === 'json'
        ? this._json(res, method)(r)
        : this._send(res, method)(r),
      e => this._error(res, method, opts.status)(e));
  }

  _json(res, method) {
    return json => {
      if (this._l && method) {
        this._l.debug(method, json);
      }
      res.json(json);
    }
  }

  _send(res, method) {
    return text => {
      if (this._l && method) {
        this._l.debug(method, text);
      }
      res.send(text);
    }
  }

  _error(res, method, status = 500) {
    return e => {
      if (this._l && method) {
        this._l.error(method, e && e.message ? e.message : e);
      }
      res.status(status).send(e);
    }
  }
}