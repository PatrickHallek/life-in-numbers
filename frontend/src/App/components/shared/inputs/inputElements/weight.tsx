import React from "react";
import { Box, TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../redux/actions";

const Weight = () => {
    const dispatch = useDispatch();
    const inputComponentTag = "weight"

    const handleChange = (event: any) => {
        dispatch(addAnswer({ inputComponentTag, value: event }))
    };

    return (
        <Box m={2}>
            <TextField type="number" onChange={event => handleChange(event?.target.value)} id="standard-basic" label="kg" />
        </Box>
    )
}

export default Weight;