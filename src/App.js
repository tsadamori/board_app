import './App.css';
import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { Header } from "./components/molecules/Header";
import { InputArea } from "./components/molecules/InputArea";
import { MessageArea } from "./components/molecules/MessageArea";

function App() {
  const date = moment().format("YYYY年MM月DD日HH:mm:ss");
  const [messages, setMessages] = useState(
    [
      {
        message: "こんにちは！",
        date: "2021年6月24日 00:00:00",
      },
      {
        message: "こんばんは！",
        date: "2021年6月24日 01:00:00",
      }
    ]
  );

  return (
    <>
      <Header />
      <SContainer className="App">
        {messages.map((message, index) => {
          return (
            <>
              <MessageArea
                messages={messages}
                setMessages={setMessages}
                message={message}
                index={index}
              />
              <hr />
            </>
          );
        })}
        <SInputAreaWrap>
          <InputArea
            messages={messages}
            setMessages={setMessages}
          />
        </SInputAreaWrap>
      </SContainer>
    </>
  );
}

export default App;

const SContainer = styled.div`
  max-width: 760px;
  margin: 100px auto 0;
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