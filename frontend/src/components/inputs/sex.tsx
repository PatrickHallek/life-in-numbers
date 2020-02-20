import React from "react";
import { Button, Box } from '@material-ui/core';
import "./inputs.css"

const Sex = () => {


    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Button className="sexButton" variant="contained" color="primary" >Male</Button>
                <Button className="sexButton" variant="contained" color="primary" >Female</Button>
            </Box>
        </div>
    )
}

export default Sex;