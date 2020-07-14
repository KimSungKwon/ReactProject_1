import React from 'react';
import styled from 'styled-components';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate'

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm />
        </AuthTemplate>
    );
};

export default LoginPage;