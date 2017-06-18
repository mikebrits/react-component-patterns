import React from 'react';
import styled from 'styled-components';

export default ({state, label, primary, handleOnClick, data}) => {

    const Button = styled.span`
        padding : 20px;
        border : 2px solid ${primary ? 'palevioletred' : 'pink'};
        color : grey;
        cursor : pointer;
        border-radius : 5px;
        &:hover {
            background-color : ${primary ? 'palevioletred' : 'pink'};
            color : white
        }
    `;
    return (
        <Button onClick={handleOnClick}>
            {data.myNumber.value}
        </Button>
    )
}