import { Container } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import PreviewContainer from './QR/PreviewContainer'
import CurrentStep from './Settings/StepSwitcher';
import { Paper } from '@mui/material';
import BackButton from './BackButton';
import NextButton from './NextButton';
import StepperQr from "./StepperQr";
import { Stack } from "@mui/material";
import ResetIcon from '@mui/icons-material/RestartAltRounded';
import TypeButtonGroup from "./TypeButtonGroup";
import { Typography } from "@mui/material";

const steps = ['Content', 'Colors', 'Logo', 'Style', 'Finish'];

const BuildQrContainer = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [qrType, setQrType] = useState('URL')


    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <Container maxWidth="lg">

            <Stack direction='row' spacing={2} pb={1.5} alignItems='center'>
                <Button variant='outlined' sx={{ width: 79 }} onClick={handleReset}>
                    <ResetIcon />  Reset
                </Button>

                <Box py={1.2} borderRadius={4} backgroundColor='#191919' sx={{ width: '65%', boxShadow: 2 }}>
                    <StepperQr steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
                </Box>

                <Button fullWidth sx={{ maxWidth: 340 }} variant='contained' onClick={handleReset}>
                    <ResetIcon />  Templates
                </Button>
            </Stack>

            <Stack spacing={1.5} direction='row'>
                <Stack p={1} sx={{ boxShadow: 2 }} borderRadius={4} spacing={2} backgroundColor='#191919' alignItems='center'>
                    <Typography> QR Type </Typography>
                    <TypeButtonGroup type={qrType} setType={setQrType} />
                </Stack>

                <Paper elevation={4} sx={{ flexGrow: 1, borderRadius: 3 }}>
                    <Stack direction='row' >
                        <Stack sx={{ flexGrow: 1 }} justifyContent={'space-between'}>
                            placeholder title
                            <CurrentStep activeStep={activeStep} setActiveStep={setActiveStep} qrType={qrType} setQrType={setQrType} />
                            <Box display='flex' justifyContent='center'>
                                <BackButton activeStep={activeStep} setActiveStep={setActiveStep} />
                                <NextButton activeStep={activeStep} setActiveStep={setActiveStep} totalSteps={steps.length} />
                            </Box>
                        </Stack>
                        <PreviewContainer />
                    </Stack >
                </Paper>
            </Stack>
        </Container >
    )
}

export default BuildQrContainer;