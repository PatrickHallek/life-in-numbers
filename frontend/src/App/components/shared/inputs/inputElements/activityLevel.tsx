import React from "react";
import { Slider, Box } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../redux/actions";

const ActivityLevel = () => {
    const dispatch = useDispatch();
    const inputComponentTag = "activityLevel"

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleChange = (event: any, newValue: number | number[]) => {
        dispatch(addAnswer({ inputComponentTag, value: newValue as number }))
    };

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        },
    ];

    return (
        <Box m={2}>
            <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={0}
                max={7}
                onChange={handleChange}
            />
        </Box>
    )
}

export default ActivityLevel;