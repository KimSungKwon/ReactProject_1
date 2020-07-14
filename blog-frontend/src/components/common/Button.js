import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBlock = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: rgba(23, 123, 12, 0.7);
    &:hover {
        background: rgba(23, 123, 12, 0.5);
    }
    
    ${props => 
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
        `}
`;

const Button = props => <ButtonBlock {...props} />;

export default Button;