import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectFileType = ({ fileExt, setFileExt }) => {

    const onExtensionChange = (event) => {
        setFileExt(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">File Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fileExt}
                    label="File Type"
                    onChange={onExtensionChange}
                >
                    <MenuItem value={"svg"}>SVG</MenuItem>
                    <MenuItem value={"png"}>PNG</MenuItem>
                    <MenuItem value={"jpeg"}>JPEG</MenuItem>
                    <MenuItem value={"webp"}>WEBP</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectFileType;