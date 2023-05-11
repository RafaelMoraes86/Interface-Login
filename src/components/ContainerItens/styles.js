import styled from 'styled-components'

export const ContainerItens = styled.div`

    background: linear-gradient(157.44deg, 
    rgba(255, 255, 255, 0.6) 0.84%, 
    rgba(255, 255, 255, 0.6) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);

    border-radius: 61px 61px 0px 0px;

    width: 414px;

    height: 100vh;


    ${props =>
        props.isBlur && `
            min-height: calc(100vh - 170px);
            backdrop-filter: blur(22.5px);
    
    `}

`;