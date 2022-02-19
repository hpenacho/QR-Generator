import Paper from '@mui/material/Paper';
import DialogSlide from './DialogSlide'
import { Divider } from '@mui/material';
import { Grid } from '@mui/material';
import ThemeModeButton from './ThemeModeButton';
import AboutThisProject from './About';
import logo from '../../assets/images/SnappyLogoDark.png'

const HeaderSection = ({ theme, setTheme }) => {

    return (
        <Paper elevation={0} sx={{ borderRadius: 0, marginBottom: 2.5, paddingX: 2, paddingY: { xs: 1, sm: 2 } }}>
            <Grid container direction="row" justifyContent={'space-between'} alignItems={'center'}>
                <Grid item >
                    <img
                        alt="logo"
                        src={logo}
                        width="300"
                        height='80'
                        objectFit='contain'
                    />
                </Grid>
                <Grid item>
                    <Grid container alignItems={'center'}>
                        <Grid item >
                            <DialogSlide info={AboutThisProject} />
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item pl={1}>
                            <ThemeModeButton theme={theme} setTheme={setTheme} ></ThemeModeButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default HeaderSection;