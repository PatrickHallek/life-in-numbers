import React from "react";
import { Box } from "@material-ui/core";
import { IContent } from "../../models/contentInterface";
import { useSelector, shallowEqual } from "react-redux";

const Result = () => {
    const content: IContent = useSelector((state: any) => state.content, shallowEqual)
    let value = content.result?.value?.toLocaleString()
    let averageValue = content.result?.averageValue?.toLocaleString()

    const renderAverageValue = () => {
        if (content.result?.averageValue)
            return <Box mt="50px" fontSize="36px" width="100%">*The average person burned {averageValue} at your age</Box>
        else return
    }

    if (Number(value) !== 0) return (
        <Box display="flex" justifyContent="center" flexWrap="wrap">
            <Box fontSize="68px" fontWeight="bold" color={content.colorTheme.primary}>{content.resultText}</Box>
            <Box fontSize="90px" fontWeight="bold" color={content.colorTheme.primary}>{value}</Box>
            {renderAverageValue()}
        </Box>
    ) 
    else return <Box>Something went wrong</Box>

};

export default Result;
