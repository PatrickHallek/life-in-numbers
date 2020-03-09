import React from "react";
import { Box, TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { updateAnswer } from "../../../../redux/reducer/actions";

const Weight = () => {

    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        dispatch(updateAnswer({ inputComponentTag: "weight", value: event }))
    };

    return (
        <Box m={2}>
            <TextField onChange={event => handleChange(event?.target.value)} id="standard-basic" label="kg" />
        </Box>
    )
}

export default Weight;