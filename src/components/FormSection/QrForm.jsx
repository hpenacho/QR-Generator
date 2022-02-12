import { Box } from "@mui/material";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useState } from 'react'
import { Fragment } from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { OptionUnstyled } from "@mui/base";
import { MenuItem } from "@mui/material";

/*<Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextSnippetIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField multiline id="input-with-sx" value={text} onChange={handleTextChange} label="QR text content" variant="standard" />
            </Box>
        </Box> */

const QrForm = ({ setQrText, options, setOptions }) => {
    const [text, setText] = useState('')
    const [fileType, setFileType] = useState(options.type)
    const [width, setWidth] = useState('')
    const [margin, setMargin] = useState('')
    const [darkColor, setDarkColor] = useState('')
    const [lightColor, setLightColor] = useState('')
    const [errorCorrectionLevel, setErrorCorrectionLevel] = useState('')

    const handleTextChange = (event) => {
        setText(event.target.value)
        setQrText(text)
    }

    const handleTypeChange = (event) => {
        setFileType(event.target.value)
        const changedOptions = { ...options, type: event.target.value }
        setOptions(changedOptions)
    }

    const handleWidthChange = (event) => {
        setWidth(event.target.value)
        const changedOptions = { ...options, width: event.target.value }
        setOptions(changedOptions)
    }

    const handleMarginChange = (event) => {
        setMargin(event.target.value)
        const changedOptions = { ...options, margin: event.target.value }
        setOptions(changedOptions)
    }

    const handleDarkColorChange = (event) => {
        setDarkColor(event.target.value)
        const changedOptions = { ...options.color, dark: event.target.value }
        setOptions(changedOptions)
    }

    const handleLightColorChange = (event) => {
        setLightColor(event.target.value)
        const changedOptions = { ...options.color, light: event.target.value }
        setOptions(changedOptions)
    }

    const handleErrorCorrectionChange = (event) => {
        setErrorCorrectionLevel(event.target.value)
        const changedOptions = { ...options, errorCorrectionLevel: event.target.value }
        setOptions(changedOptions)
    }

    return (

        <Fragment>
            <Typography variant="h6" gutterBottom>
                QR-Code Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item sm={12}>
                    <TextField
                        required
                        multiline
                        name="QR content"
                        label="Text content"
                        variant="standard"
                        onChange={handleTextChange}
                    />
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        select
                        label="Image File type"
                        value={fileType}
                        onChange={handleTypeChange}
                        fullWidth
                    >
                        <MenuItem key={'PNG'} value={"image/png"}>
                            PNG
                        </MenuItem>
                        <MenuItem key={'JPEG'} value={"image/jpeg"}>
                            JPEG
                        </MenuItem>
                        <MenuItem key={'WEBP'} value={"image/webp"}>
                            WEBP
                        </MenuItem>
                    </TextField>
                </Grid>
                <Grid item >
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </Fragment >
    )
}

export default QrForm;