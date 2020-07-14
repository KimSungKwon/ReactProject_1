import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

// 로그인, 회원가입 폼

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: #7b7bbd;
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #7b7bbd;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    outline: none;
    width: 70%;
    &:focus {
        color: #232323;
    }
    & + & {
        margin-top: 1rem;
    }
`;

// 폼 하단에 로그인이나 회원가입 링크 보여줌
const Footer = styled.div`
    margin-top: 1rem;
    text-align: center;
    a {
        text-decoration: none;
    }
`;

const AuthForm = ({ children }) => {
    return (
        <AuthFormBlock>
            <h3>로그인</h3>
            <form>
                <StyledInput 
                    placeholder="아이디"
                    autoComplete="username"
                    name="username" 
                />
                <StyledInput 
                    placeholder="비밀번호"
                    autoComplete="new-password"
                    name="password"
                    type="password"
                />
                <div />
                <Button fullWidth>로그인</Button>
            </form>
            <Footer>
                <Link to="/register">회원가입</Link>
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;