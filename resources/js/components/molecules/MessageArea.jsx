import styled from 'styled-components';
import moment from 'moment';

import { DeleteButton } from '../atoms/Buttons';

export const MessageArea = (props) => {
  const { messages, setMessages, message, index, id } = props;
  const onClickEditButton = (index) => {
    console.log('clicked edit button');
  };
  const onClickDeleteButton = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
    axios.delete(`/api/message/${id}`);
  };
  return (
    <SContainer>
      {message.message}
      <SDescWrap>
        <SDateWrap>{moment(message.created_at).format('YYYY年MM月DD日HH:mm:ss')}</SDateWrap>
        <SUserWrap>posted by {message.name}</SUserWrap>
        <SDeleteButton id={message.id} onClick={() => onClickDeleteButton(index)}>
          削除
        </SDeleteButton>
      </SDescWrap>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 10px;
`;

const SDescWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SDeleteButton = styled(DeleteButton)`
  margin-left: 10px;
`;

const SDateWrap = styled.span`
  font-size: 12px;
`;

const SUserWrap = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;
