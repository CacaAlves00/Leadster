import styled from 'styled-components';

export const AsideStyled = styled.aside`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 14vh 0;
 width: 100%;
 background-color: #E8F1FF;
 
 button {
     border: 2px solid rgb(70, 135, 227);
     border-bottom-left-radius: 5px;
     background-color: transparent;
     font-size: .8rem;
 }

 h2 {
    font-size: 2.3rem;
    font-weight: 500;
    text-align: center;
    padding-bottom: 3vh;
    border-bottom: 1px solid #D3D3D3;

    span {
        font-size: 3.4rem;
        font-weight: 700;
        color: rgb(70, 135, 227);
        display: block;
        position: relative;
        img {
            position: absolute;
            top: 0;
            right: 0;
            margin-top: -20px;
            margin-right: -20px;
            width: 40px;
            height: 30px;
        }

        span {
        color: red;
        font-size: .4rem;
        width: 100%;
        text-align: left;
     }
    }

    }

    & > span {
        font-size: .7rem;
        span {
            font-weight: bold;
        }
    }
`