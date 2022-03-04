import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PreviewQR from './PreviewQR'
//import MiscSettings from './MiscSettings';
import SizeSlider from './SizeSlider';
import { useState } from 'react';
import SelectFileType from './SelectFileType';
import DownloadButton from './DownloadButton';

const PreviewContainer = ({ qrCode, options, setOptions }) => {
    const [fileExt, setFileExt] = useState("svg");

    return (
        <>
            <Card sx={{ maxWidth: "100%" }}>
                <PreviewQR qrCode={qrCode} />
                <CardContent>
                    <SizeSlider options={options} setOptions={setOptions} />
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-evenly' }}>
                    <DownloadButton qrCode={qrCode} fileExt={fileExt} />
                    <SelectFileType fileExt={fileExt} setFileExt={setFileExt} />
                </CardActions>
            </Card>
        </>
    );
}

export default PreviewContainer;