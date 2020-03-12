import React from "react";
import { Box, Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../redux/actions";

const TeenageActivityLevel = () => {
    const dispatch = useDispatch();
    const inputComponentTag = "teenageActivityLevel"

    const handleChange = (value: number) => {
        dispatch(addAnswer({ inputComponentTag, value: value }))
    };

    return (
        <Box display="flex" justifyContent="center">
            <Box width="150px" margin={2}>
                <Button fullWidth={true} onClick={() => handleChange(1)} className="sexButton" variant="contained" color="primary" >Not Really</Button>
            </Box>
            <Box width="150px" margin={2}>
                <Button fullWidth={true} onClick={() => handleChange(2)} className="sexButton" variant="contained" color="primary" >A little bit</Button>
            </Box>
            <Box width="150px" margin={2}>
                <Button fullWidth={true} onClick={() => handleChange(3)} className="sexButton" variant="contained" color="primary" >Really much</Button>
            </Box>
        </Box>
    )
}

export default TeenageActivityLevel;