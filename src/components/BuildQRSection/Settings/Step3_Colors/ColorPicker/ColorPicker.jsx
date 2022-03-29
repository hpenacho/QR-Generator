import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import useClickOutside from "../../../../../hooks/useClickOutside"
import useDebounce from "../../../../../hooks/useDebounce";
import "./ColorPicker.css"
import { useEffect } from "react";
import { Box } from "@mui/material";
import TagIcon from '@mui/icons-material/Tag';

const ColorPicker = ({ color, setColor }) => {
    const popover = useRef();
    const [isOpen, toggle] = useState(false);
    const [value, setValue] = useState(color);
    const debouncedColor = useDebounce(value, 400)

    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);

    useEffect(() => setColor(debouncedColor), [debouncedColor, setColor])

    return (
        <div className="picker">
            <Box display='flex' justifyContent='center'>
                <div
                    className="swatch"
                    style={{ backgroundColor: color }}
                    onClick={() => toggle(true)}
                />
                <HexColorInput color={value} onChange={(e) => { setValue(e) }} />
            </Box>
            {isOpen && (
                <div className="popover" ref={popover}>
                    <HexColorPicker color={value} onChange={(e) => { setValue(e) }} />
                </div>
            )}
        </div>
    );
};

export default ColorPicker;