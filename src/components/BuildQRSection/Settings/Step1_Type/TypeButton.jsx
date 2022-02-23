import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Button, Typography } from "@mui/material";
import { SvgIcon } from '@mui/material';

const TypeButton = ({ setQrType, icon, text }) => {

    const CustomizedButton = styled(Button)({
        width: 150,
        height: 90,
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
        },
    });

    const handleClick = () => {
        console.log(text)
        setQrType(text)
    }

    return (
        <Grid display="flex"
            justifyContent="center"
            item xs={12} sm={6} md={4} >
            <CustomizedButton onClick={handleClick} variant="contained">
                <Stack alignItems="center">
                    <SvgIcon
                        sx={{
                            height: 'auto', width: 40
                        }}
                    >
                        {icon}
                    </SvgIcon>
                    <Typography> {text} </Typography>
                </Stack>
            </CustomizedButton>
        </Grid >
    )
}

export default TypeButton;