import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const NextButton = ({ activeStep, setActiveStep, totalSteps }) => {

    return (
        <IconButton
            color='primary'
            disabled={activeStep === totalSteps - 1}
            onClick={() => setActiveStep(activeStep + 1)} sx={{ mr: 1 }}>
            <ArrowCircleRightIcon fontSize='large' />
        </IconButton>
    )
}

export default NextButton;

