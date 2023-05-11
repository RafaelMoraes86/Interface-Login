import styled from 'styled-components'
import Background from '../../assets/bg image.svg'


export const Container = styled.div`

    background: url("${Background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
   
`;
export const Image = styled.img`
 margin: 42px 30px 44px;

`;

export const Label = styled.p`
    color: #EEEEEE;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.408px;
    margin-left: 61px;

`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    width: 342px;
    height: 58px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    padding: 25px 15px;
    outline: none;
    margin-left: 36px;
    margin-bottom: 56px;
`;




