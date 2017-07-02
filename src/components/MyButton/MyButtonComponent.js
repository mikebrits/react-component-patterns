import React from 'react';
import styled from 'styled-components';

export default ({state, label, primary, handleOnClick, data, prepend, disabled, isUpdating}) => {

    const RandomNumberButton = styled.span`
        padding : 20px;
        border : 2px solid ${primary ? 'palevioletred' : 'pink'};
        color : grey;
        border-radius : 5px;
        background-color : white;
        cursor : ${isUpdating ? 'progress' : 'pointer'};
        opacity : ${isUpdating ? 0.6 : 1};
        &:hover {
            background-color : ${primary ? 'palevioletred' : 'pink'};
            color : white
        }
    `;
    return (
        <RandomNumberButton onClick={handleOnClick}>
            {data.value}
        </RandomNumberButton>
    )
}