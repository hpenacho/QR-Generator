import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";

/*const validationSchema = yup.object({
    email: yup
        .string('Enter an email')
        .email('Enter a valid email')
}); */

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
        //validationSchema: validationSchema,
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