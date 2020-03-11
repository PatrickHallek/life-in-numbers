import React from "react";
import { Button, Box } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../redux/actions";


const Sex = () => {
    const dispatch = useDispatch();
    const inputComponentTag = "sex";

    const handleChange = (value: string) => {
        dispatch(addAnswer({ inputComponentTag, value: value }))
    };

    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Box width="150px" margin={2}>
                    <Button fullWidth={true} onClick={() => handleChange("male")} className="sexButton" variant="contained" color="primary" >Male</Button>
                </Box>
                <Box width="150px" margin={2}>
                    <Button fullWidth={true} onClick={() => handleChange("female")} className="sexButton" variant="contained" color="primary" >Female</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Sex;