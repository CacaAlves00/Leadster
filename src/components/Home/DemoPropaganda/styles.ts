import styled from 'styled-components';

export const SectionStyled = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 10vh;
 padding: 4vh 0;
 background-color: #E8F1FF;

 .propaganda {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .heading {

        border-bottom: 1px solid #D3D3D3;
        width: 70%;

        & > h2, & > h3 {
            font-weight: 300 !important;
        }
        & > h2 {
            span {
                display: block;
                font-weight: bold;
                font-size: 1.7rem;
            }
        }
        & > h3 {
            span {
                font-weight: bold;
            }
        }
    }

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 3vw;
        margin: 4vh 0;
        width: 70%;
        
        button {
            background-color: rgb(70, 135, 227);
            color: white;
            border-color: transparent;
            padding: 1vw 2vw;
        }

        img {
            width: 12vw;
            height: 8vh;
        }
    }

    .payment {
        display: flex;
        font-size: .7rem;

        div:nth-child(1) {
            border-right: 2px solid #D3D3D3;
            margin-right: 1vw;
            padding-right: 1vw;
        }

        .icon {
            height: 2vh;
            width: 1.2vw;
            margin-right: 1vw;
        }

        .rating {
            width: 6vw;
        }
    }

 }
`