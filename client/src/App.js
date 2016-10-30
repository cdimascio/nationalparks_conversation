import React, { Component } from 'react';
import Conversation from './services/conversation';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      conversationHistory: []
    };
  }

  componentDidMount() {
    this.sendMessage('')
  }

  render() {
    return (
      <div className="app">
        <header>National Parks</header>
        <section>
          { this.state.conversationHistory.map((h,i) => this.renderExchange(h, i)) }
        </section>
        <footer>
        { this.renderInputView()}
        </footer>
      </div>
    );
  }

  renderExchange(exchange, key) {
    return (
        <div key={key} className="exchange">
          {
            exchange.input.text ? <div className="user-msg">{exchange.input.text}</div> : null
          }
          {
            exchange.output.text.map((t,i) => <div key={i} className="watson-msg">{t}</div>)
          }
      </div>);
  }

  renderInputView() {
    return (
        <input type="text" autoComplete="off" placeholder='Enter text'
               onKeyUp={e => this.onInputKeyUp(e)}
               onClick={e => this.onTextInputClicked(e)}/>
    );
  }

  onInputKeyUp(e) {
    switch (e.which) {
      case 0x0d:
        console.log('send message', e)
        this.sendMessage(e.target.value)
        break;
      default:
        // console.log('e other')
        break;
    }
  }

  sendMessage(text) {
    Conversation.message({
      text
    }).then(r => {
      this.state.conversationHistory.push(r);
      this.setState({
        conversationHistory: this.state.conversationHistory
      })
    });
  }

  onTextInputClicked(e) {

  }

  click() {
    Conversation.message({
      text: "hi"
    })
  }
}

export default App;
