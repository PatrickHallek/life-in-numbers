import React from "react";
import { Button, Typography, Box, Card, CardContent } from "@material-ui/core";
import InputComponentMapping from "../inputs";

type QuestionProps = {
  title: string,
  handler: any,
  inputComponentTag: any
}

const Question = ({ title, handler, inputComponentTag }: QuestionProps) => {

  const inputComponent = InputComponentMapping(inputComponentTag)

  return (
    <Box mt={3} className="question">
      <Card className="appCard">
        <CardContent>
          <Typography variant="h3" component="h2">
            <Box fontWeight="fontWeightBold"></Box>
          </Typography>
          <Typography variant="h4" component="h3">
            {title}
          </Typography>
          {inputComponent}
          <Button onClick={handler} variant="contained" color="primary" className="button">
            Submit
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Question;
