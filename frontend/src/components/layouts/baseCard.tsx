import React, { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

class BaseCard extends Component {
  state = {
    title: "title"
  }
  
  render() {
    return (
      <Box mt={3}>
        <Card>
          <CardContent>
            <Typography variant="h3" component="h2">
              <Box fontWeight="fontWeightBold"></Box>
            </Typography>
            <Typography variant="h4" component="h3">
              -----------------------------
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default BaseCard;
