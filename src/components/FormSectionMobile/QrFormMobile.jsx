import { Box } from "@mui/material";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useState } from 'react'


const QrForm = ({ setQrText, setOptions }) => {
    const [text, setText] = useState('')

    const handleTextChange = (event) => {
        setText(event.target.value)
        setQrText(text)
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextSnippetIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField multiline id="input-with-sx" value={text} onChange={handleTextChange} label="QR text content" variant="standard" />
            </Box>

            <Button onClick={() => setQrText(text)} variant="contained" endIcon={<QrCode2Icon />}>
                Generate QR
            </Button>

        </Box>
    )
}

export default QrForm;