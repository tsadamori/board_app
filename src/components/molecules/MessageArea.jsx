import styled from "styled-components";
import { PrimaryButton, DeleteButton, TomatoButton } from "../atoms/Buttons";

export const MessageArea = (props) => {
    
    const { messages, setMessages, message, index } = props;
    const onClickEditButton = (index) => {
        console.log("clicked edit button");
    }
    const onClickDeleteButton = (index) => {
        const newMessages = [...messages];
        newMessages.splice(index, 1);
        setMessages(newMessages);
    }
    return (
        <SContainer>
            {message.message}
            <SDescWrap>
                <SDeleteButton onClick={() => onClickDeleteButton(index)}>削除</SDeleteButton>
                <SDateWrap>
                    {message.date}
                </SDateWrap>
            </SDescWrap>
        </SContainer>
    );
}

const SContainer = styled.div`
    padding: 10px;
`;

const SDescWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SDeleteButton = styled(DeleteButton)`
    margin-right: 10px;
`;

const SDateWrap = styled.span`
    font-size: 12px;
`;