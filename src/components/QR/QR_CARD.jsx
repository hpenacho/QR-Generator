import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';
import QRsrc from './QR_SRC';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton } from '@mui/material';
//import InfoIcon from '@mui/icons-material/Info';
import { Fab } from '@mui/material';

export default function MultiActionAreaCard({ qrText, options }) {
    return (
        <Card sx={{ minWidth: 200, maxWidth: 300 }}>
            <QRsrc text={qrText} options={options} />
            <CardActions sx={{ justifyContent: 'space-evenly' }}>

                <Fab variant="extended">
                    <DownloadIcon sx={{ mr: 1 }} />
                    Download
                </Fab>
                <IconButton size="medium">
                    <SettingsOverscanIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}