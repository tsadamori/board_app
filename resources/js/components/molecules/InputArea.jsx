import { useState, useCallback } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { NameInput } from '../atoms/NameInput';
import { InputBox } from '../atoms/InputBox';
import { PrimaryButton } from '../atoms/Buttons';
import axios from 'axios';

export const InputArea = (props) => {
  const { messages, setMessages } = props;
  const [name, setName] = useState('名無し');
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const onChangeText = (event) => {
    setText(event.target.value);
    if (event.target.value === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const onChangeUser = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [name]
  );
  const onKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      submitMessage();
    }
  };
  const onClickSubmitButton = () => {
    submitMessage();
  };
  const submitMessage = () => {
    setMessages([
      ...messages,
      {
        name: name,
        message: text,
      },
    ]);
    axios
      .post('/api/message', {
        name: name,
        message: text,
      })
      .then((res) => {
        console.log('saved message');
      })
      .catch(() => {});
    setText('');
    setDisabled(true);
  };
  return (
    <InputAreaContainer>
      <Wrap>
        <SNameInputWrap>
          <NameInput
            value={name}
            onChange={onChangeUser}
            placeholder="ユーザ名を入力してください"
          />
        </SNameInputWrap>
        <InputBox
          value={text}
          placeholder="メッセージを入力してください"
          onChange={onChangeText}
          onKeyDown={onKeyDown}
        />
      </Wrap>
      <SPrimaryButton disabled={disabled} onClick={onClickSubmitButton}>
        送信
      </SPrimaryButton>
    </InputAreaContainer>
  );
};

const InputAreaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 760px;
`;

const Wrap = styled.div`
  text-align: center;
  width: 600px;
`;

const SNameInputWrap = styled.div`
  margin-bottom: 10px;
`;

const SPrimaryButton = styled(PrimaryButton)`
  margin-left: 10px;
`;
