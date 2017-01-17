const dotenv = require('dotenv');
dotenv.config();

const ConversationV1 = require('watson-developer-cloud/conversation/v1');

const conversation = new ConversationV1({
  username: process.env.WATSON_CONVERSATION_USERNAME,
  password: process.env.WATSON_CONVERSATION_PASSWORD,
  version_date: ConversationV1.VERSION_DATE_2016_09_20
});

conversation.message({
  input: { text: '' },
  workspace_id: process.env.WATSON_CONVERSATION_WORKSPACE_ID,
}, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});