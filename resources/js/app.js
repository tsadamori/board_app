/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';

import { Header } from './components/molecules/Header';
import { InputArea } from './components/molecules/InputArea';
import { MessageArea } from './components/molecules/MessageArea';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';

function App() {
  const date = moment().format('YYYY年MM月DD日HH:mm:ss');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get('/api/message')
      .then((res) => {
        setMessages(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Header />
      <SContainer className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {messages.map((message, index) => {
                return (
                  <>
                    <MessageArea
                      messages={messages}
                      setMessages={setMessages}
                      message={message}
                      index={index}
                      id={message.id}
                    />
                    <hr />
                  </>
                );
              })}
              <SInputAreaWrap>
                <InputArea messages={messages} setMessages={setMessages} />
              </SInputAreaWrap>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  max-width: 760px;
  margin: 100px auto;
`;

const SInputAreaWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 760px;
  background-color: #fff;
  padding: 30px 0;
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
