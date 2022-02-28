import IconButton from '@mui/material/IconButton';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const BackButton = ({ activeStep, setActiveStep }) => {

    return (
        <IconButton
            color="inherit"
            disabled={activeStep === 0}
            onClick={() => { setActiveStep((prevActiveStep) => prevActiveStep - 1) }}
            sx={{ mr: 1 }}>
            <ArrowCircleLeftIcon fontSize='large' />
        </IconButton>
    )
}

export default BackButton