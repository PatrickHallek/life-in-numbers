import React from "react";
import { Box, TextField } from '@material-ui/core';

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