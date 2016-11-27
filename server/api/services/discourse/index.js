import Conversation from '../conversation';
import DiscourseHandler from './discourse.handler';

class DiscourseService {
  constructor() {
    this._conversation = Conversation;
    this._discourseHandler = DiscourseHandler;
  }

  message({
    input,
    context
  }) {
    return this._conversation
      .message({input, context})
      .map(result => this._discourseHandler.handle(result));
  }
}

export default new DiscourseService();