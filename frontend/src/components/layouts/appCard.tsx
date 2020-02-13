import React from "react";
import { Button, Typography, Box, Card, CardContent } from "@material-ui/core";
import "./layouts.css"

type AppCardProps = {
  title: string,
  handler: any
}

const AppCard = ({ title, handler }: AppCardProps) => {

  return (
    <Box mt={3}>
      <Card className="appCard">
        <CardContent>
          <Typography variant="h3" component="h2">
            <Box fontWeight="fontWeightBold"></Box>
          </Typography>
          <Typography variant="h4" component="h3">
            {title}
          </Typography>
          <Button onClick={handler} variant="contained" color="primary" className="button">
            Submit
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AppCard;
