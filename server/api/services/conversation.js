import watson from 'watson-developer-cloud';
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
    if (!process.env.WATSON_CONVERSATION_VERSION_DATE) throw new Error('no version date present');
    if (!process.env.WATSON_CONVERSATION_API_ROOT) throw new Error('no version date present');

    return {
      conversation: watson.conversation({
        url: process.env.WATSON_CONVERSATION_API_ROOT,
        username: process.env.WATSON_CONVERSATION_USERNAME,
        password: process.env.WATSON_CONVERSATION_PASSWORD,
        version_date: process.env.WATSON_CONVERSATION_VERSION_DATE,
        version: 'v1'
      }),
      workspaceId: process.env.WATSON_CONVERSATION_WORKSPACE_ID
    };
  }
}
const instance = new Conversation();
export default instance;