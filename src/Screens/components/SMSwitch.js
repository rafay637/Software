import React from "react";
import { Switch } from "@mui/material";

function SMSwitch(props){

    const {
        size,
        color,
        onChange,
    } = props;
    return(
        <>
        <Switch size={size} color={color}   />
        </>
    )
}

export default SMSwitch ;
