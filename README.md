# nationalparks-conversation
 
The repo contains samples project code demonstrating the Watson Conversation service


![](https://github.com/cdimascio/nationalparks_conversation/raw/master/.assets/sshot.png)

## Setup

Create a `.env` file in the project root

e.g.
```
APP_ID=parks-conversation
PORT=3004
LOG_LEVEL=debug
SESSION_SECRET=test

WATSON_CONVERSATION_API_ROOT=https://gateway.watsonplatform.net/conversation/api
WATSON_CONVERSATION_VERSION=v1
WATSON_CONVERSATION_VERSION_DATE=2016-07-11
WATSON_CONVERSATION_USERNAME=<USERNAME>
WATSON_CONVERSATION_PASSWORD=<PASSWORD>
WATSON_CONVERSATION_WORKSPACE_ID=<WORKSPACE>
```

Install the client and server dependencies
### Server
- `npm install`

### Client
- `cd client`
- `npm install`

## Run
- Start the server `npm start`
- Start the client `cd client && npm start`
- Navigate to http://localhost:3000
