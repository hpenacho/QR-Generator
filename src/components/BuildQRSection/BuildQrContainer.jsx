import { Container } from "@mui/material";
import HorizontalNonLinearStepper from "./Stepper";
import { Paper } from "@mui/material";

const BuildQrContainer = () => {

    return (
        <Container maxWidth="lg">
            <Paper elevation={4} sx={{ borderRadius: 2 }}>
                <HorizontalNonLinearStepper />
            </Paper>
        </Container>
    )
}

export default BuildQrContainer;