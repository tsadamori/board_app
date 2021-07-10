import styled from 'styled-components';

export const InputBox = (props) => {
  const { value, placeholder, onChange, onKeyDown } = props;
  return (
    <SInputBox placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} value={value} />
  );
};

const SInputBox = styled.textarea`
  padding: 5px 10px;
  height: 60px;
  min-width: 80%;
  border-radius: 3px;
  outline: none;
`;
