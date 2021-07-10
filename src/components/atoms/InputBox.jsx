import styled from "styled-components";

export const InputBox = (props) => {
    const { value, placeholder, onChange, onKeyDown } = props;
    return (
        <SInputBox
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
        />
    );
}

const SInputBox = styled.input`
    padding: 5px 10px;
    height: 30px;
    width:60%;
    border-radius: 15px;
    outline: none;
`;