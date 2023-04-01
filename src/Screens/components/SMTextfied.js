
import { TextField } from "@mui/material";
import React from "react";


function SMTextField(props) {
    const {label} = props

    return (
        <>
            <TextField className="p-2 m-3"
                variant="outlined"
                color="warning"
                type='number'
                label={label}
            />


        </>
    )
}

export default SMTextField;