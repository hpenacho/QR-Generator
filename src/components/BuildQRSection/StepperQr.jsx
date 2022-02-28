import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

const StepperQr = ({ steps, activeStep, setActiveStep }) => {

    return (
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
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