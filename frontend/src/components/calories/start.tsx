import React from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import "./calories.css"


type CaloriesStartProps = {
    handler: any
}

const CaloriesStart = ({ handler }: CaloriesStartProps) => {

    return (
        <Container maxWidth="lg">
            <Box className="landingPageBox">
                <Typography color="primary" variant="h1">
                    <Box fontWeight="fontWeightBold" className="title">
                        How much calories have you consumed in your entire life?
                    </Box>
                </Typography>
                <Box mt={6} mb={18} className="buttonBox">
                    <Button onClick={handler} variant="contained" color="primary" className="button">
                        Let's find out
                    </Button>
                </Box>
            </Box>
            <img
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
            />
        </Container>
    );

};

export default CaloriesStart;
