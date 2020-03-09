import React from "react";
import { Container, Box } from "@material-ui/core";
import { IContent } from "../../models/contentInterface";
import { useSelector, shallowEqual } from "react-redux";

const Result = () => {
    const content: IContent = useSelector((state: any) => state.content, shallowEqual)

    return (
        <div>
            <h1>{content.resultText} </h1>
            <Box fontSize="170px">{content.result}</Box>
        </div>
    );

};

export default Result;
