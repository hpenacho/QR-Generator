import { Button, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { useFormik } from "formik";
import { Stack } from "@mui/material";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";

const Url = ({ setOptions }) => {
    const [website, setWebsite] = useLocalStorage("url", "https://www.linkedin.com/in/hugopenacho/")

    const formik = useFormik({
        initialValues: {
            website: website,
        },
        onSubmit: values => {
            setOptions(options => ({
                ...options,
                data: values.website
            }))
            setWebsite(values.website)
        },
    });
    const setInputValue = useFormHandleChange(formik);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack alignItems='center' spacing={2}>
                <TextField
                    fullWidth
                    id="website"
                    name="website"
                    label="URL"
                    value={formik.values.website}
                    onChange={(e) => setInputValue("website", e.target.value)}
                    sx={{ maxWidth: 450 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <LinkIcon />
                            </InputAdornment>
                        ),
                    }}

                />

                <Button type="submit" variant="contained" color="primary">
                    Update QR
                </Button>
            </Stack>
        </form>
    )
}

export default Url;