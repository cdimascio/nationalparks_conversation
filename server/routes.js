import conversationRouter from './api/controllers/conversation/router';

const root = '/natparks/api/v1';
export default function routes(app) {
  app.use(`${root}/watson/conversation`, conversationRouter);
};