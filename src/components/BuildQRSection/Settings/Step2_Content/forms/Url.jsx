import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { InputAdornment } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { Box } from "@mui/material";


export default function Url() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            textField: "https://www.linkedin.com/in/hugopenacho/",
        }
    });

    const onSubmit = (values) => alert(JSON.stringify(values));

    return (
        <center>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="textField"
                    render={({ field }) => (
                        // Material UI TextField already supports
                        // `value` and `onChange`
                        <Box
                        >
                            <TextField
                                {...field}
                                fullWidth
                                sx={{ maxWidth: 450 }}
                                id="input-with-icon-textfield"
                                label="URL"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LinkIcon />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </Box>
                    )}
                />
                <br />


                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </center >
    );
}