import React, { useState } from "react";
import { Box } from "@mui/material";

const ColorPicker = ({ color, setColor, setOptions }) => {


    const handleChange = (event) => {
        console.log(event.target.value)
        setColor(event.target.value)
    }

    return (
        <Box>
            <input type="color" onChange={handleChange} value={color} />
            <input type="text" onChange={handleChange} value={color} />
        </Box>
    );
};

export default ColorPicker;