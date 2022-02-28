import { Typography } from "@mui/material";
import Tab from '@mui/material/Tab';

const TypeTab = ({ currentType, type, icon }) => {

    console.log(type)
    return (
        <Tab
            sx={{ margin: 'auto' }}
            icon={icon}
            iconPosition="top"
            value={currentType}
            label={
                <Typography
                    sx={{
                        display: { xs: 'none', md: 'block' }
                    }}>
                    {type}
                </Typography>
            }
        />
    )
}

export default TypeTab;