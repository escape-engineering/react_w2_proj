import React from "react";
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
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    border: ${({ $border }) => $border};
    border-radius: ${({ $borderRadius }) => $borderRadius};
    color: ${({ $color }) => $color};
    font-size: ${({ $fontSize }) => $fontSize};
    font-weight: ${({ $fontWeight }) => $fontWeight};
    margin: ${({ $margin }) => $margin};
    transition: 0.3s;
    &:hover {
        filter: brightness(0.8);
    }
`;
