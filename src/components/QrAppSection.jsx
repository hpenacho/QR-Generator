import { Container } from "@mui/material"
import { Paper } from "@mui/material"
import QR_CARD from "./QR/QR_CARD"
import { useState } from 'react'
import QrForm from "./FormSection/QrForm"
import { Grid } from "@mui/material"
import { Box } from "@mui/material"

const QrAppSection = () => {

    let defaultOptions = {
        errorCorrectionLevel: 'L',
        type: 'image/png',
        margin: 3,
        width: 300,
        color: {
            dark: "",
            light: ""
        }
    }

    const [qrText, setQrText] = useState('ExampleQR')
    const [options, setOptions] = useState(defaultOptions)

    //temporary structure on paper
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Grid container justifyContent={'space-evenly'} alignItems={'center'}>
                    <Grid item sm={7}>
                        <QrForm setQrText={setQrText} options={options} setOptions={setOptions} />
                    </Grid>
                    <Grid item sm={5}>
                        <Box display='flex' justifyContent={'center'}>
                            <QR_CARD qrText={qrText} options={options} />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default QrAppSection