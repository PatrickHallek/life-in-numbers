import React from "react";
import { Slider, Box, TextField } from '@material-ui/core';
import "./inputs.css"

const Weight = () => {

    return (
        <Box m={2}>
            <form  noValidate autoComplete="off">
                <TextField id="standard-basic" label="kg" />
            </form>
        </Box>
    )
}

export default Weight;