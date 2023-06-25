import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5vw;
    width: 50%;
    margin: 0 auto;
    padding-top: 2vh;

    span:first-child {
        margin-right: .5vw;
    }

    .pag-number {
        padding: 0.2vw 0.6vw;
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid transparent;
        transition: border .4s ease;
        
        &:hover {
            border: 1px solid black;
        }
    }

    .selected {
        border-color: rgb(70, 135, 227) !important;
    }
`