import React from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";


type StartProps = {
    title: string,
    handler: any
}

const Start = ({ handler, title }: StartProps) => {

    return (
        <Container maxWidth="lg">
            <Box className="startBox">
                <Typography color="primary" variant="h1">
                    <Box fontWeight="fontWeightBold" className="title">
                        {title}
                    </Box>
                </Typography>
                <Box mt={6} mb={18} className="buttonBox">
                    <Button onClick={handler} variant="contained" color="primary" className="button">
                        Let's find out
                    </Button>
                </Box>
            </Box>
            {/* <img
                src={require("../../assets/img/ellipse.png")}
                alt="ellipse"
                className="backgroundEllipseBottom"
            />
            <img
                src={require("../../assets/img/ellipse.png")}
                alt="ellipse"
                className="backgroundEllipseTop"
            />
            <img
                src={require("../../assets/img/avocado.png")}
                alt="avocado"
                className="backgroundImage"
            /> */}
        </Container>
    );

};

export default Start;
