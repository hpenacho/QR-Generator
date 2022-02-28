import { ToggleButton } from "@mui/material";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import LinkIcon from '@mui/icons-material/Link';
import ContactsIcon from '@mui/icons-material/Contacts';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const TypeArray = [
    { type: 'URL', icon: <LinkIcon /> },
    { type: 'TEXT', icon: <TextSnippetIcon /> },
    { type: 'VCARD', icon: <ContactsIcon /> },
    { type: 'LOCATION', icon: <LocationOnIcon /> },
    { type: 'EMAIL', icon: <EmailIcon /> },
    { type: 'SMS', icon: <SmsIcon /> },
    { type: 'WIFI', icon: <NetworkWifiIcon /> },
    { type: 'EVENT', icon: <EventNoteIcon /> },
    { type: 'CRYPTO', icon: <MonetizationOnIcon /> }
];

const TypeButtonGroup = ({ type, setType }) => {

    const TypeButton = styled(ToggleButton)({
        backgroundColor: '#191919',
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            backgroundColor: '#94c973'
        }
    });

    const handleChange = (event, chosenType) => {
        console.log(chosenType)
        if (chosenType !== null) {
            setType(chosenType);
        }
    };


    return (
        <ToggleButtonGroup
            value={type}
            orientation="vertical"
            exclusive
            onChange={handleChange}
            aria-label="Type selection"
        >

            {TypeArray.map((element, index) => (
                <TypeButton key={index} value={element.type}> {element.icon} </TypeButton>
            ))}
        </ToggleButtonGroup>

    )
}

export default TypeButtonGroup;