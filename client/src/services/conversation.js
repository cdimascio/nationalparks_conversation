import config from '../config';
import { apiGatewayRequest, COMMON_API_GATEWAY_HEADERS } from './helpers/fetch';

class ConversationService {
  // private vars
  _responseContext = {}

  message({
    text,
    context = {},
    button = false,
    reset = false
  }) {
    this._responseContext = reset ? {...context} : {...this._responseContext, ...context};
    const payload = {
      input: {
        text: button ? `[${text}]` : text
      },
      context: this._responseContext
    };
    console.log(payload);
    return apiGatewayRequest(`${config.apiRoot}/watson/conversation/message`, {
      method: 'post',
      headers: COMMON_API_GATEWAY_HEADERS,
      body: JSON.stringify(payload)
    })
      .then(r => {
        this._responseContext = r.context;
        const res = JSON.parse(JSON.stringify(r));
        // delete res.data.context.system;
        // delete res.data.context.conversation_id;
        // delete res.data.entities;
        // delete res.data.intents;
        // delete res.data.output.nodes_visited;
        // delete res.data.output.log_messages;
        console.log(res);
        return res;
      });
  }
}

export default new ConversationService();
