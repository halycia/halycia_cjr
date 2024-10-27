import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`

    background-color: var(--realRed);
    appearance: none;
    border: 2px solid #ff6464e2;
    border-radius: 2px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: var(--fontFamilyButton);
    font-size: 1rem;
    font-weight: 600;
    line-height: normal;
    margin: 1rem;
    min-height: 3.75rem;
    min-width: 20%;
    max-width: 50%;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;

    &:disabled {
        pointer-events: none;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
        background-color: red;
    }

    &:active {
        box-shadow: none;
        transform: translateY(0);
    }
`;

export default function BotaoGenerico({ label, onClick }) {
    return (
        <StyledButton onClick={onClick}>
            {label}
        </StyledButton>
    );
}