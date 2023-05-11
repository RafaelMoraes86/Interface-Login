import React from 'react'
import { Button as ButtonGo } from './style'


function Button({children,...props}) {

    return <ButtonGo {...props}>{children}</ButtonGo>



};


export default Button