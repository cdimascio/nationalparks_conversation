import React, { Component } from 'react';
import Conversation from './services/conversation';
import ParkCard from './ParkCard';
import AnimalCard from './AnimalsCard';
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
    return !!exchange.output.cardType
      ? this.renderCard(exchange, key)
      : this.renderText(exchange, key);
  }

  renderCard(exchange, key) {
    switch(exchange.output.cardType) {
      case 'park':
        return (
          <div key={key} className="exchange">
            { exchange.input.text ? <div className="user-msg">{exchange.input.text}</div> : null }
            <div className="watson-msg"><ParkCard park={exchange.context.park}/></div>
          </div>);
      case 'animals':
        return (
          <div key={key} className="exchange">
          { exchange.input.text ? <div className="user-msg">{exchange.input.text}</div> : null }
          <div className="watson-msg"><AnimalCard park={exchange.context.park}/></div>
        </div>);
      default:
        this.renderText(exchange,key);
    }
  }

  renderText(exchange, key) {
    return (
      <div key={key} className="exchange">
        { exchange.input.text ? <div className="user-msg">{exchange.input.text}</div> : null }
        { exchange.output.text.map((t, i) => <div key={i} className="watson-msg">{t}</div>) }
      </div>);
  }

  renderInputView() {
    return <input type="text" autoComplete="off" placeholder='Engage with Watson'
                  onKeyUp={e => this.onInputKeyUp(e)}/>;
  }

  onInputKeyUp(e) {
    switch (e.which) {
      case 0x0d:
        console.log('send message', e);
        this.sendMessage(e.target.value);
        e.target.value = '';
        break;
      default:
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

}

export default App;
