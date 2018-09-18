# nationalparks-conversation
 
**Chatbots and Watson**: Let’s talk about national parks: course source code

The chatbot uses [Watson Conversation](https://console.bluemix.net/catalog/services/conversation?env_id=ibm:yp:us-south&taxonomyNavigation=services), [Weather Company Data](https://console.bluemix.net/catalog/services/weather-company-data?env_id=ibm:yp:us-south&taxonomyNavigation=services), [React](https://facebook.github.io/react/), [Nodejs](https://nodejs.org/en/), and [Bluemix](https://www.bluemix.net) to create a chatbot about National Parks. 

The complete course content and videos lives [here](https://developer.ibm.com/courses/all-courses/chatbots-and-watson-lets-talk-about-national-parks/)

## A glimpse

![](https://github.com/cdimascio/nationalparks_conversation/raw/master/.assets/sshot.png)

## Prequisities

1. Clone this repo
2. Create a Bluemix account

## Setup

### Conversation

- Provision an instance of [Watson Conversation](https://console.bluemix.net/catalog/services/conversation?env_id=ibm:yp:us-south&taxonomyNavigation=services) on Bluemix
- Create a new conversation workspace by importing `./resources/conversation_workspace.json` into your Watson Conversation workspaces,
- Install client and server dependencies
- Create `.env` files in the project root with the following contents

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

### Server

Install server dependencies

```shell
npm install
```

### Client

Install client dependencies

```shell
cd client
npm install
```

## Build / Run (Development)
- Start the server `npm start`
- Start the client `cd client && npm start`
- Navigate to http://localhost:3000

## Build / Run (Production)

```shell
cd client
npm run build
cd ..
npm start
```
Navigate to [http://localhost:3000](http://localhost:3000)

## Deploy to Bluemix

#### Prequisites: 
- Install CloudFoundry Tools

#### Deploy
Follow the first 3 steps in the "Build / Run (Production)" section above, then run.

```shell
cf push USER_ID-nationalparks
```
Navigate to [https://USER_ID-nationalparks.mybluemix.net](https://USER_ID-nationalparks.mybluemix.net)



## FAQ

**Q:** In Lab 5: "[Programmatically interact with Watson Conversation](https://developer.ibm.com/courses/all/chatbots-watson-lets-talk-national-parks/?course=begin#3990)", I get an authentication error. What do I do?

**A:**
This occurs on Windows. Windows sets the `USERNAME` variable to the logged in OS user. Ultimately, it ends up overriding the value for `USERNAME` specified in `.env`. The problem can be solved in two ways:

- on step 3., hard code the `USERNAME` and `PASSWORD`
  e.g.
   
  ```javascript
  const conversation = new ConversationV1({
		username: 'your-username',
		password: 'your-password',
		version_date: ConversationV1.VERSION_DATE_2016_09_20
	});
  ```
 **or**
- Rename the `USERNAME` env 
	- 	Edit `.env`, change `USERNAME` to `NP_USERNAME`
	- 	in step 3., change `USERNAME` to `NP_USERNAME`
