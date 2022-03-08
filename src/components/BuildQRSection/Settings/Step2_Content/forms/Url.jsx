import { Button, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { Box } from "@mui/material";

const Url = ({ url, setUrl, setOptions }) => {

    const handleClick = () => {
        setOptions(options => ({
            ...options,
            data: url
        }));
    };

    return (
        <>
            <TextField
                value={url}
                fullWidth
                onChange={e => setUrl(e.target.value)}
                id="url"
                label="URL"
                sx={{ maxWidth: 450 }}
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
    );
}

export default Url;