import { Button, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

const Text = ({ multiText, setMultiText, setOptions }) => {

    const handleClick = () => {
        setOptions(options => ({
            ...options,
            data: multiText
        }));
    };

    return (
        <>
            <TextField
                value={multiText}
                fullWidth
                onChange={e => setMultiText(e.target.value)}
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                sx={{ maxWidth: 550 }}
                maxRows={8}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <LinkIcon />
                        </InputAdornment>
                    ),
                }}

            />
            <Button onClick={handleClick} type="submit" variant="contained" color="primary">
                Update QR
            </Button>
        </>
    )
}

export default Text;