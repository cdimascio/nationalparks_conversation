const ConversationV1 = require('watson-developer-cloud/conversation/v1');
import Rx from 'rx';

class Conversation {
  constructor() {
    const watson = this._initialize();
    this._conversation = watson.conversation;
    this._workspaceId = watson.workspaceId;
  }

  message({
    input,
    context
  }) {
    var payload = {
      workspace_id: this._workspaceId,
      context: context || {},
      input: input || {}
    };
    const message = Rx.Observable.fromCallback(::this._conversation.message);
    return message(payload).map(r => r[1]);
  }

  _initialize() {
    if (!process.env.WATSON_CONVERSATION_USERNAME) throw new Error('no username present');
    if (!process.env.WATSON_CONVERSATION_PASSWORD) throw new Error('no password present');
    if (!process.env.WATSON_CONVERSATION_WORKSPACE_ID) throw new Error('no workspace id present');
    if (!process.env.WATSON_CONVERSATION_API_ROOT) throw new Error('no version date present');

    return {
      conversation: new ConversationV1({
        url: process.env.WATSON_CONVERSATION_API_ROOT,
        username: process.env.WATSON_CONVERSATION_USERNAME,
        password: process.env.WATSON_CONVERSATION_PASSWORD,
        version_date: ConversationV1.VERSION_DATE_2016_09_20,
        version: 'v1'
      }),
      workspaceId: process.env.WATSON_CONVERSATION_WORKSPACE_ID
    };
  }
}
export default new Conversation();