import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { useFormik } from "formik";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";

const validationSchema = yup.object({
    phone: yup
        .string()
        .required("This field is Required")
        .matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/, "Please insert a phone number")
});

const Sms = ({ setOptions }) => {

    const [phone, setPhone] = useLocalStorage("smsphone", "+351 123 456 789")
    const [message, setMessage] = useLocalStorage("smsmessage", "")
    const formik = useFormik({
        initialValues: {
            phone: phone,
            message: message,
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            setOptions(options => ({
                ...options,
                data: `SMSTO:${values.phone.replace(/\s+/g, '')}:${values.message}`
            }))
            setPhone(values.phone)
            setMessage(values.message)
            setMessage(values.message)
        },
    });
    const setInputValue = useFormHandleChange(formik);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack alignItems='center' spacing={2}>
                <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={formik.values.phone}
                    onChange={(e) => setInputValue("phone", e.target.value)}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
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

export default Sms;