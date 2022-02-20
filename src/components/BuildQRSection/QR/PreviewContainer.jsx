import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PreviewQR from './PreviewQR'
//import MiscSettings from './MiscSettings';
import SizeSlider from './SizeSlider';

export default function PreviewContainer() {
    return (
        <Card sx={{ maxWidth: "100%" }}>
            <PreviewQR />
            <CardContent>
                <SizeSlider />
            </CardContent>
            <CardActions>
                <Button size="small">Download as is</Button>
            </CardActions>
        </Card>
    );
}