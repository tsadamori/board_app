import styled from "styled-components";

export const BasicButton = (props) => {
    const { disabled, onClick, children } = props;
    return (
        <Button
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

const Button = styled.button`
    border: none;
    border-radius: 3px;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const PrimaryButton = styled(Button)`
    padding: 5px 10px;
    background-color: #80BD9E;
`;

export const DeleteButton = styled(Button)`
    padding: 3px 8px;
    background-color: #ff4500;
`;

export const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;