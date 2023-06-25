import styled from 'styled-components';

export const SectionStyled = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 column-gap: 3vw;
 width: 100%;
 margin: 8vh 0;
 padding-bottom: 2vh;
 border-bottom: 1px solid #D3D3D3;

 button {
    font-size: .9rem;
    color: black;
    border-width: 1px;
    border-radius: 23px;

    &.selected {
        background-color: rgb(70, 135, 227) !important;
        color: white !important;
        border-color: transparent;
    }
 }

 div {
    display: flex;
    column-gap: 1vw;

    select {
        border-radius: 5px;
        padding: .4vh .2vw;
        background-color: transparent;
        cursor: pointer;
    }
    
 }

`