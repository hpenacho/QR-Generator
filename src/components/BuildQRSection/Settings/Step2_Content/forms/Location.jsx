import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/material";

const coordinatesSchema = yup.object().shape({
    latitude: yup.string().required().matches(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/, "Insert a valid latitude (-90° to 90°)"),
    longitude: yup.string().required().matches(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/, "Insert a valid longitude (-180° to 180°)")
})

const addressSchema = yup.object().shape({
    address: yup.string().required("This is a required field.")
})

const Location = ({ setOptions }) => {

    const [address, setAddress] = useLocalStorage("locationAddress", "")
    const [latitude, setLatitude] = useLocalStorage("locationLatitude", "")
    const [longitude, setLongitude] = useLocalStorage("locationLongitude", "")
    const [isCoordinates, setIsCoordinates] = useLocalStorage("isCoordinates", "")

    const formik = useFormik({
        initialValues: {
            address: address,
            latitude: latitude,
            longitude: longitude,
        },
        validationSchema: isCoordinates === 'true' ? coordinatesSchema : addressSchema,
        onSubmit: values => {
            const location = isCoordinates === 'true' ? `${values.latitude},${values.longitude}` : values.address;
            setOptions(options => ({
                ...options,
                data: `https://maps.google.com/local?q=${location}`
            }))
            setAddress(values.address)
            setLatitude(values.latitude)
            setLongitude(values.longitude)
        },
    });
    const setInputValue = useFormHandleChange(formik);

    return (
        <>
            <Box py={2} display='flex' sx={{ justifyContent: 'center' }}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Define location by:</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={isCoordinates}
                        onChange={(e) => setIsCoordinates(e.target.value)}
                    >
                        <FormControlLabel value={"false"} control={<Radio />} label="Address" />
                        <FormControlLabel value={"true"} control={<Radio />} label="Coordinates" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} >

                    {isCoordinates === 'false' &&
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="address"
                                name="address"
                                label="Address"
                                value={formik.values.address}
                                onChange={(e) => setInputValue("address", e.target.value)}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                            />
                        </Grid>
                    }
                    {isCoordinates === 'true' &&
                        <>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="latitude"
                                    name="latitude"
                                    label="Latitude"
                                    value={formik.values.latitude}
                                    onChange={(e) => setInputValue("latitude", e.target.value)}
                                    error={formik.touched.latitude && Boolean(formik.errors.latitude)}
                                    helperText={formik.touched.latitude && formik.errors.latitude}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="longitude"
                                    name="longitude"
                                    label="Longitude"
                                    value={formik.values.longitude}
                                    onChange={(e) => setInputValue("longitude", e.target.value)}
                                    error={formik.touched.longitude && Boolean(formik.errors.longitude)}
                                    helperText={formik.touched.longitude && formik.errors.longitude}
                                />
                            </Grid>
                        </>
                    }
                    <Grid container justifyContent='center' item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Update QR
                        </Button>
                    </Grid>
                </Grid>
            </form >
        </>
    )
}

export default Location;