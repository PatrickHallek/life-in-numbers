import React from "react";
import { Slider, Box } from '@material-ui/core';
import { updateAnswer } from "../../../../redux/reducer/actions";
import { useDispatch } from "react-redux";

const Height = () => {
    const dispatch = useDispatch();

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleChange = (event: any, newValue: number | number[]) => {
        dispatch(updateAnswer({ inputComponentTag: "height", value: newValue as number }))
    };

    const marks = [
        {
            value: 120,
            label: '1,2m',
        },
        {
            value: 180,
            label: '1,8m',
        },
        {
            value: 240,
            label: '2,4m',
        },
    ];

    return (
        <Box m={2}>
            <Slider
                defaultValue={170}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={120}
                max={250}
                onChange={handleChange}
            />
        </Box>
    )
}

export default Height;