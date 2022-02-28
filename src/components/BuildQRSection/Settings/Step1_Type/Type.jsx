import LinkIcon from '@mui/icons-material/Link';
import ContactsIcon from '@mui/icons-material/Contacts';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box } from '@mui/material';
import { Typography } from "@mui/material";
import { Grid } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import TypeButton from './TypeButton';

const TypeArray = [
    { text: 'URL', icon: <LinkIcon /> },
    { text: 'TEXT', icon: <TextSnippetIcon /> },
    { text: 'VCARD', icon: <ContactsIcon /> },
    { text: 'LOCATION', icon: <LocationOnIcon /> },
    { text: 'EMAIL', icon: <EmailIcon /> },
    { text: 'SMS', icon: <SmsIcon /> },
    { text: 'WIFI', icon: <NetworkWifiIcon /> },
    { text: 'EVENT', icon: <EventNoteIcon /> },
    { text: 'CRYPTO', icon: <MonetizationOnIcon /> }
];

const Type = ({ setQrType, setActiveStep }) => {


    return (
        <>
            <Box pb={2}
                alignItems="center">
                <QrCode2Icon sx={{ fontSize: 40 }} />
                <Typography color={'green'} fontSize={28} fontFamily={'exo'} > QR Type </Typography>
            </Box>


            <Grid container spacing={2}>
                {TypeArray.map((element, index) => (
                    <TypeButton key={index} setActiveStep={setActiveStep} setQrType={setQrType} icon={element.icon} text={element.text} />
                ))}
            </Grid>
        </>
    )
}

export default Type;