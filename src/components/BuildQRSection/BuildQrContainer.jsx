import { Container } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import PreviewContainer from './QR/PreviewContainer'
import CurrentStep from './Settings/StepSwitcher';
import { Paper } from '@mui/material';
import BackButton from './BackButton';
import NextButton from './NextButton';
import StepperQr from "./StepperQr";

const steps = ['Content', 'Colors', 'Logo', 'Style', 'Finish'];

const BuildQrContainer = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <Container maxWidth="xl">
            <Box sx={{ width: '100%' }}>
                <Grid container pb={1.5}>

                    <Button onClick={handleReset}>
                        Reset
                    </Button>

                    <Grid item xs={8}>
                        <StepperQr steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
                    </Grid>
                </Grid>

                <Paper elevation={4} sx={{ borderRadius: 2 }}>
                    <Grid container >
                        <Grid item container md={7} lg={8} direction='column' justifyContent={'space-between'}>
                            <CurrentStep activeStep={activeStep} setActiveStep={setActiveStep} />
                            <Grid sx={{ backgroundColor: '#191919' }} item container display='flex' justifyContent='center' >
                                <Box >
                                    <BackButton activeStep={activeStep} setActiveStep={setActiveStep} />
                                    <NextButton activeStep={activeStep} setActiveStep={setActiveStep} totalSteps={steps.length} />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container item md={5} lg={4} justifyContent='flex-end' >
                            <PreviewContainer />
                        </Grid>
                    </Grid >
                </Paper>
            </Box >
        </Container >
    )
}

export default BuildQrContainer;