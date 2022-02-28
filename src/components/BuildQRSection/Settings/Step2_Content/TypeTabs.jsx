import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import LinkIcon from '@mui/icons-material/Link';
import ContactsIcon from '@mui/icons-material/Contacts';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Box } from '@mui/material';

const TypeTabs = ({ currentType, setCurrentType }) => {

    const handleChange = (event, newValue) => {
        setCurrentType(newValue);
    };

    return (
        <TabContext value={currentType}>
            <center><Box sx={{ width: { xs: 400, sm: 580, md: 'auto' } }}>

                <TabList onChange={handleChange}
                    scrollButtons="auto"
                    variant="scrollable"
                    fullwidth='true'
                    aria-label="lab API tabs example"
                    textColor="secondary"
                    indicatorColor="secondary">
                    <Tab icon={<LinkIcon />} iconPosition="top" value="URL" label='URL' />
                    <Tab icon={<TextSnippetIcon />} iconPosition="top" value="TEXT" label='TEXT' />
                    <Tab icon={<ContactsIcon />} iconPosition="top" value="VCARD" label='VCARD' />
                    <Tab icon={<LocationOnIcon />} iconPosition="top" value="LOCATION" label='LOCATION' />
                    <Tab icon={<EmailIcon />} iconPosition="top" value="EMAIL" label='EMAIL' />
                    <Tab icon={<SmsIcon />} iconPosition="top" value="SMS" label='SMS' />
                    <Tab icon={<NetworkWifiIcon />} iconPosition="top" value="WIFI" label='WIFI' />
                    <Tab icon={<EventNoteIcon />} iconPosition="top" value="EVENT" label='EVENT' />
                </TabList>

            </Box></center>
        </TabContext>
    )
}

export default TypeTabs;