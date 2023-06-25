import styled from 'styled-components';

export const FooterStyled = styled.header`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 width: 100%;
 
 .footer-bottom {
     
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .9rem;
    padding: 1vw;


        span {
            padding: 0 1vw;
            color: #b5b1b1;
        }

        span:nth-child(1) {
            border-right: 1px solid #b5b1b1;
        }
    }


 & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
    width: 13vw;
    height: 2.8vw;
    margin: 0 auto;
    padding: 3vh 0 2vh 0;
    }

    span {
        margin-bottom: 6vh;
        font-size: .8rem;
    }

 }
`

export const FooterList = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #D3D3D3;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  color: #b5b1b1; 
  margin: 4vh 0;

  &:first-child {
    font-weight: bold;
    color: black;
  }

  img {
    width: 3vw;
    height: 3vw;
    margin-right: 1vw;
    cursor: pointer;

    transition: transform 0.5s ease;

    &:hover {
    transform: scale(1.03);
    }
  }
`;