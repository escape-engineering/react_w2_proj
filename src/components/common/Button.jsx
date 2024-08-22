import styled from "styled-components";

const Button = ({ onClickHandler, children, ...rest }) => {
    return (
        <StyledButton onClick={onClickHandler} {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    cursor: pointer;
    min-width: 50px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    height: ${({ $height }) => ($height ? $height : "30px")};
    background-color: ${({ $backgroundColor }) => ($backgroundColor ? $backgroundColor : "#9bee81")};
    border: ${({ $border }) => ($border ? $border : "none")};
    border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : "5px")};
    color: ${({ $color }) => ($color ? $color : "black")};
    font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "20px")};
    font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 900)};
    margin: ${({ $margin }) => ($margin ? $margin : "10px 0px")};
    transition: 0.3s;
    &:hover {
        filter: brightness(0.8);
    }
`;
