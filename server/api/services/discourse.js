import Conversation from './conversation';

class DiscourseService {
  constructor() {
    this._conversation = Conversation;
  }

  message({
    input,
    context
  }) {
    // Do specific conversational stuff
    // e.g. if (intents[0] === 'off_topic) { /* do something, perhaps augment response or inject new data */)
    return this._conversation.message({input, context})
  }
}

export default new DiscourseService();