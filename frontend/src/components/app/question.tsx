import React from "react";
import { Button, Typography, Box, Card, CardContent } from "@material-ui/core";
import "./index.css"

type QuestionProps = {
  title: string,
  handler: any
}

const Question = ({ title, handler }: QuestionProps) => {

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

export default Question;
