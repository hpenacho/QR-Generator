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

const Type = ({ setQrType }) => {


    return (
        <>
            <Box pb={2} display="flex"
                justifyContent="center"
                alignItems="center">
                <QrCode2Icon sx={{ fontSize: 40 }} />
                <Typography color={'green'} fontSize={28} fontFamily={'exo'} > QR Type </Typography>
            </Box>
            <Grid container spacing={2}>
                <TypeButton setQrType={setQrType} icon={<LinkIcon />} text='URL' />
                <TypeButton setQrType={setQrType} icon={<TextSnippetIcon />} text='TEXT' />
                <TypeButton setQrType={setQrType} icon={<ContactsIcon />} text='VCARD' />
                <TypeButton setQrType={setQrType} icon={<LocationOnIcon />} text='LOCATION' />
                <TypeButton setQrType={setQrType} icon={<EmailIcon />} text='EMAIL' />
                <TypeButton setQrType={setQrType} icon={<SmsIcon />} text='SMS' />
                <TypeButton setQrType={setQrType} icon={<NetworkWifiIcon />} text='WIFI' />
                <TypeButton setQrType={setQrType} icon={<EventNoteIcon />} text='EVENT' />
                <TypeButton setQrType={setQrType} icon={<MonetizationOnIcon />} text='CRYPTO' />
            </Grid>
        </>
    )
}

export default Type;