import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import PreviewContainer from './QR/PreviewContainer'
import StepSwitcher from './Settings/StepSwitcher';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const steps = ['Type', 'Content', 'Colors', 'Logo', 'Style', 'Finish'];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container pb={1.5}>

                <Button onClick={handleReset}>
                    Reset
                </Button>

                <Grid item xs={8}>
                    <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepButton color="inherit" onClick={() => { setActiveStep(index) }}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>

            <Paper elevation={4} sx={{ borderRadius: 2 }}>
                <Grid container >
                    <Grid item container md={7} lg={8} py={2} direction='column' justifyContent={'space-between'}>
                        <Box px={1.5}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <StepSwitcher activeStep={activeStep} />
                        </Box>
                        <React.Fragment>
                            <Grid item container display='flex' justifyContent='center' >
                                <Box sx={{ pt: 2 }}>
                                    <IconButton
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}>
                                        <ArrowCircleLeftIcon fontSize='large' />
                                    </IconButton>

                                    <IconButton
                                        color='primary'
                                        disabled={activeStep === steps.length - 1}
                                        onClick={handleNext} sx={{ mr: 1 }}>
                                        <ArrowCircleRightIcon fontSize='large' />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid container item md={5} lg={4} justifyContent='flex-end' >
                        <PreviewContainer />
                    </Grid>
                </Grid >
            </Paper>
        </Box >

    );
}