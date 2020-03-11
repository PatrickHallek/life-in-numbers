import React from "react";
import { Box } from "@material-ui/core";
import { IContent, IResult } from "../../models/contentInterface";
import { useSelector, shallowEqual } from "react-redux";

const Result = () => {
    const content: IContent = useSelector((state: any) => state.content, shallowEqual)
    const result: IResult = useSelector((state: any) => state.result, shallowEqual)
    let value = result.value?.toLocaleString()
    let averageValue = result?.averageValue?.toLocaleString()

    const renderAverageValue = () => {
        if (result.averageValue)
            return <Box mt="50px" fontSize="36px" width="100%">*The average person burned {averageValue} at your age</Box>
        else return
    }

    if (Number(value) !== 0) return (
        <Box display="flex" justifyContent="center" flexWrap="wrap">
            <Box fontSize="68px" fontWeight="bold" color={content.theme.primary}>{content.resultText}</Box>
            <Box fontSize="90px" fontWeight="bold" color={content.theme.primary}>{value}</Box>
            {renderAverageValue()}
        </Box>
    )
    else return <Box>Something went wrong</Box>

};

export default Result;
