import { Container } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PreviewContainer from './QR/PreviewContainer'
import CurrentStep from './Settings/StepSwitcher';
import { Paper } from '@mui/material';
import BackButton from './BackButton';
import NextButton from './NextButton';
import StepperQr from "./StepperQr";
import { Stack } from "@mui/material";
import ResetIcon from '@mui/icons-material/RestartAltRounded';
import StyleIcon from '@mui/icons-material/Style';
import TypeButtonGroup from "./TypeButtonGroup";
import { IconButton } from "@mui/material";
import DefaultOptions from "./DefaultOptions";
import HelpIcon from '@mui/icons-material/HelpRounded';
import { Tooltip } from "@mui/material";
import { Grid } from "@mui/material";

const steps = ['Content', 'Colors', 'Logo', 'Style', 'Finish'];

const BuildQrContainer = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [qrType, setQrType] = useState('URL')
    const [options, setOptions] = useState(DefaultOptions)

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container maxWidth="lg">

            <Stack direction='row' spacing={2} pb={1.5} alignItems='center'>
                <IconButton sx={{ marginX: 1.2 }} variant='outlined' onClick={handleReset}>
                    <ResetIcon fontSize='large' />
                </IconButton>

                <Box py={1.2} borderRadius={4} backgroundColor='#191919' sx={{ width: '65%', boxShadow: 2 }}>
                    <StepperQr steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
                </Box>

                <Button fullWidth sx={{ maxWidth: 310 }} variant='contained' onClick={handleReset}>
                    <StyleIcon />  Style Templates
                </Button>
            </Stack>

            <Stack spacing={1.5} direction='row'>
                <Stack px={1} pb={1.5} pt={0.5} sx={{ boxShadow: 2 }} borderRadius={4} spacing={0.5} backgroundColor='#191919' alignItems='center'>
                    <Tooltip title="QR types, click for FAQ" placement="right">
                        <IconButton >
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                    <TypeButtonGroup type={qrType} setType={setQrType} />
                </Stack>

                <Paper elevation={4} sx={{ flexGrow: 1, borderRadius: 3 }}>
                    <Grid container>
                        <Grid container direction="column" item xs={12} md={6.8} justifyContent='space-between'>
                            whatever
                            <Grid>
                                <CurrentStep
                                    activeStep={activeStep}
                                    setActiveStep={setActiveStep}
                                    qrType={qrType}
                                    setQrType={setQrType}
                                    setOptions={setOptions}
                                />
                            </Grid>
                            <Grid container item justifyContent='center'>
                                <BackButton activeStep={activeStep} setActiveStep={setActiveStep} />
                                <NextButton activeStep={activeStep} setActiveStep={setActiveStep} totalSteps={steps.length} />
                            </Grid>

                        </Grid>
                        <Grid item container xs={12} md={5.2} justifyContent='flex-end'>
                            <PreviewContainer options={options} setOptions={setOptions} />
                        </Grid>
                    </Grid>
                </Paper>
            </Stack>
        </Container >
    )
}

export default BuildQrContainer;