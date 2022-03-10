import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { useFormik } from "formik";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";

const validationSchema = yup.object({
    email: yup
        .string('Enter an email')
        .email('Enter a valid email')
});

const Email = ({ setOptions }) => {

    const [email, setEmail] = useLocalStorage("email", "exampleMail@gmail.com")
    const [subject, setSubject] = useLocalStorage("subject", "")
    const [message, setMessage] = useLocalStorage("message", "")

    const formik = useFormik({
        initialValues: {
            email: email,
            subject: subject,
            message: message
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            setOptions(options => ({
                ...options,
                data: `mailto:${values.email}?subject=${values.subject}&body=${values.message}`
            }))
            setEmail(values.email)
            setSubject(values.subject)
            setMessage(values.message)
        },
    });
    const setInputValue = useFormHandleChange(formik);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack alignItems='center' spacing={2}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={(e) => setInputValue("email", e.target.value)}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{ maxWidth: 550 }}
                />
                <TextField
                    fullWidth
                    id="subject"
                    name='subject'
                    label="Subject"
                    value={formik.values.subject}
                    onChange={(e) => setInputValue("subject", e.target.value)}
                    sx={{ maxWidth: 550 }}
                />

                <TextField
                    fullWidth
                    id="message"
                    name='message'
                    label="Message"
                    value={formik.values.message}
                    onChange={(e) => setInputValue("message", e.target.value)}
                    multiline
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

export default Email;