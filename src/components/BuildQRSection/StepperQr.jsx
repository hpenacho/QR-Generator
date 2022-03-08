import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { Typography } from '@mui/material';

const StepperQr = ({ steps, activeStep, setActiveStep }) => {

    return (
        <Stepper
            nonLinear
            activeStep={activeStep}>
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepButton color="inherit" onClick={() => { setActiveStep(index) }}>
                        {label}
                    </StepButton>
                </Step>
            ))}
        </Stepper>
    );
}

export default StepperQr;
