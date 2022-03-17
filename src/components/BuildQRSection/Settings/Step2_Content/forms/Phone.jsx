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

const Phone = ({ setOptions }) => {

    const [phone, setPhone] = useLocalStorage("phone", "")
    const formik = useFormik({
        initialValues: {
            phone: phone,
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            setOptions(options => ({
                ...options,
                data: `tel:${values.phone.replace(/\s+/g, '')}`
            }))
            setPhone(values.phone)
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
                    placeholder="+351 123 456 789"
                    value={formik.values.phone}
                    onChange={(e) => setInputValue("phone", e.target.value)}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    sx={{ maxWidth: 550 }}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update QR
                </Button>
            </Stack>
        </form>
    )
}

export default Phone;