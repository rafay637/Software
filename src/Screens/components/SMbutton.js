import { Button } from "@mui/material";
import React from "react";

function SMButton(props){

    const {label , onclick,className,color} = props;

    return(
        <Button 
        className={'p-2 m-2 text-center'}
        variant="contained" 
        color={color}
        onClick={onclick}
        >{label}</Button>
    )
}

export default SMButton;