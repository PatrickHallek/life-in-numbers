import React from "react";
import { Button, Box } from '@material-ui/core';
import { updateAnswer } from "../../../../redux/reducer/actions";
import { useDispatch } from "react-redux";

const Sex = () => {

    const dispatch = useDispatch();
    const handleChange = (value: number) => {
        dispatch(updateAnswer({ inputComponentTag: "sex", value: value }))
    };


    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Button onClick={() => handleChange(1)} className="sexButton" variant="contained" color="primary" >Male</Button>
                <Button onClick={() => handleChange(2)} className="sexButton" variant="contained" color="primary" >Female</Button>
            </Box>
        </div>
    )
}

export default Sex;