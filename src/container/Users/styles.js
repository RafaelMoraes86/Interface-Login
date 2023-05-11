import styled from 'styled-components'
import Background from '../../assets/bg image2.svg'


export const Container = styled.div`

    background: url("${Background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    
   
`;
export const Image = styled.img`
 margin: 42px 30px 44px;

`;

export const Ul = styled.ul`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    width: 342px;
    height: 58px;
    outline: none;
    border: none;
 
p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
   
    }

button {
    background: none;
    border: none;
    cursor: pointer;


}
`
