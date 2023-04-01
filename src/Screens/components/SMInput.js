import { TextField } from "@mui/material";
import React from "react";


function SmInput(props){

    const {label,value,onchange,variant,className,} = props

    return<>
        <TextField 
        label={label}
        value={value}
        onChange={onchange}
        variant={variant}
        className={className}
        />
    </>
}

export default SmInput;