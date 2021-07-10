import styled from 'styled-components';

export const NameInput = (props) => {
  const { ref, onChange, placeholder } = props;
  return <SInput ref={ref} onChange={onChange} placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 5px 10px;
  min-width: 80%;
  border-radius: 3px;
  height: 30px;
  outline: none;
  border: 1px solid #000;
`;
