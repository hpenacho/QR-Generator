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
import { Box } from '@mui/material';
import useGenerateQR from '../../../hooks/useGenerateQR';

const PreviewContainer = ({ options, setOptions }) => {
    const [fileExt, setFileExt] = useState("svg");
    const qrCode = useGenerateQR(options);

    return (
        <Box>
            <Card display='flex' height="100%">
                <PreviewQR qrCode={qrCode} />
                <CardContent>
                    <SizeSlider options={options} setOptions={setOptions} />
                </CardContent>
                <CardActions sx={{ paddingY: 3, justifyContent: 'space-evenly' }}>
                    <DownloadButton qrCode={qrCode} fileExt={fileExt} />
                    <SelectFileType fileExt={fileExt} setFileExt={setFileExt} />
                </CardActions>
            </Card>
        </Box >
    );
}

export default PreviewContainer;