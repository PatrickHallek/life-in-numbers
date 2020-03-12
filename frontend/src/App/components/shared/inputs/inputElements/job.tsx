import React from "react";
import { Box, Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../redux/actions";

const Job = () => {
    const dispatch = useDispatch();
    const inputComponentTag = "job"

    const handleChange = (value: number) => {
        dispatch(addAnswer({ inputComponentTag, value: value }))
    };

    return (
        <Box display="flex" justifyContent="center">
            <Box width="150px" margin={2}>
                <Button fullWidth={true} onClick={() => handleChange(1)} className="sexButton" variant="contained" color="primary">Less Active</Button>
            </Box>
            <Box width="150px" margin={2}>
                <Button fullWidth={true} onClick={() => handleChange(2)} className="sexButton" variant="contained" color="primary">Medium</Button>
            </Box>
            <Box width="150px" margin={2}>
                <Button fullWidth={true} onClick={() => handleChange(3)} className="sexButton" variant="contained" color="primary">Very Active</Button>
            </Box>
        </Box>
    )
}

export default Job;