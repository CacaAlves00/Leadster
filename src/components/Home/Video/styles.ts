import styled from 'styled-components';

export const DivStyled = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 width: 25vw;
 height: 36vh;
 border-radius: 5px;
 background-color: white;
 box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 transition: transform 0.5s ease, color 0.1s ease;

 &:hover {
      color: rgb(70, 135, 227);
 }
 

 &:hover {
   transform: scale(1.03);
 }
 
 img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 25vw;
    height: 80%;
 }

 span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-weight: 700;
    font-size: .9rem;
    padding: 0 1vw;
    text-align: center;
}
`