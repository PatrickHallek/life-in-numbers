import React from "react";
import { Button, Typography, Box, Card, CardContent } from "@material-ui/core";
import InputComponentMapping from "../shared/inputs/input";
import { useDispatch } from "react-redux";
import { IAnswer } from "../../models/contentInterface";
import { addAnswer } from "../../redux/reducer/actions";

type QuestionProps = {
  title: string,
  inputComponentTag: any
}

const Question = ({ title, inputComponentTag }: QuestionProps) => {
  const inputComponent = InputComponentMapping(inputComponentTag)

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
          {inputComponent}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Question;
