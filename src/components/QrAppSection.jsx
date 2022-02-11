import { Container } from "@mui/material"
import { Paper } from "@mui/material"
import QR from "./QrRenderer/QR"
import { useState } from 'react'
import QrForm from "./FormSection/QrForm"
import { Grid } from "@mui/material"

const QrAppSection = () => {

    let defaultOptions = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        margin: 1,
        width: 50,
        color: {
            dark: "#010599FF",
            light: "#FFBF60FF"
        }
    }

    const [qrText, setQrText] = useState('ExampleQR')
    const [options, setOptions] = useState(defaultOptions)

    //temporary structure on paper
    return (
        <Container maxWidth="lg">
            <Paper elevation={4} /*sx={{ height: 400 }}*/>
                <Grid container justifyContent={'space-evenly'}>
                    <Grid item>
                        <QrForm setQrText={setQrText} setOptions={setOptions} />
                    </Grid>
                    <Grid item>
                        <QR text={qrText} options={options} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default QrAppSection