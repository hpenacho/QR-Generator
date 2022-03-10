import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Stack } from "@mui/material";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";

const Text = ({ setOptions }) => {
    const [text, setText] = useLocalStorage("text", "")

    const formik = useFormik({
        initialValues: {
            text: text,
        },
        onSubmit: values => {
            setOptions(options => ({
                ...options,
                data: values.text
            }))
            setText(values.text)
        },
    });

    const setInputValue = useFormHandleChange(formik);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack alignItems='center' spacing={2}>
                <TextField
                    fullWidth
                    id="text"
                    name="text"
                    label="Multiline"
                    value={formik.values.text}
                    multiline
                    onChange={(e) => setInputValue("text", e.target.value)}
                    sx={{ maxWidth: 550 }}
                    rows={6}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update QR
                </Button>
            </Stack>
        </form>
    )
}

export default Text;