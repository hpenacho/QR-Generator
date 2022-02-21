import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';

function valuetext(value) {
    return `${value}°C`;
}

export default function SizeSlider() {
    const [value, setValue] = useState(1000);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box>
            <Slider
                aria-label="Custom marks"
                defaultValue={1000}
                value={value}
                getAriaValueText={valuetext}
                step={25}
                min={200}
                max={2000}
                onChange={handleChange}
            />
            <Grid container>
                <Grid item xs={4} textAlign='left'>
                    <Typography fontSize={13} gutterBottom>
                        Low Quality
                    </Typography>
                </Grid>
                <Grid item xs={4} textAlign='center'>
                    <Typography fontWeight={'bold'} fontSize={14} gutterBottom>
                        {value} x {value} px
                    </Typography>
                </Grid>
                <Grid item xs={4} textAlign='right'>
                    <Typography fontSize={13} gutterBottom>
                        High Quality
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    );
}