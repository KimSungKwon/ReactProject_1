import React from 'react';
import styled, { css } from 'styled-components';
import bg_main from '../images/bg_main.png';

// 메인 페이지 

const MainPageBodyBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 1000px;
    background-image: url(${bg_main});

    .text {
        padding-top: 250px;
        font-family: 'Heebo', sans-serif;
        text-align: center;
        font-size: 80px;
        color: #fff;
    }
`;

const MainPageBody = () => {
    return (
        <MainPageBodyBlock>
            <div className="text">TEXT</div>
        </MainPageBodyBlock>
    );
};

export default MainPageBody;