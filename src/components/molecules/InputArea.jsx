import { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import { InputBox } from "../atoms/InputBox";
import { PrimaryButton } from "../atoms/Buttons";

export const InputArea = (props) => {
    const { messages, setMessages } = props;
    const [text, setText] = useState('');
    const [disabled, setDisabled] = useState(true);
    const onChangeText = (event) => {   
        setText(event.target.value);
        if (event.target.value === '') {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }
    const onKeyDown = (event) => {
        if (event.keyCode === 13 && event.target.value !== '') {
            submitMessage();
        }
    }
    const onClickSubmitButton = () => {
        submitMessage();
    }
    const submitMessage = () => {
        const date = moment().format("YYYY年M月D日 HH:mm:ss");
        setMessages([...messages, {
            message: text,
            date: date,
        }]);
        setText('');
        setDisabled(true);
    }
    return (
        <InputAreaContainer>
            <InputBox
                value={text}
                placeholder="メッセージを入力してください"
                onChange={onChangeText}
                onKeyDown={onKeyDown}
            />
            <SPrimaryButton
                disabled={disabled}
                onClick={onClickSubmitButton}
            >
                送信
            </SPrimaryButton>
        </InputAreaContainer>
    )
}

const InputAreaContainer = styled.div`
    text-align: center;
    width: 100%;
`;

const SPrimaryButton = styled(PrimaryButton)`
    margin-left: 10px;
`;