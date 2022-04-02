import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/material";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import ColorPicker from "./ColorPicker/ColorPicker";
import { useFormik } from "formik";
import useFormHandleChange from "../../../../hooks/useFormHandleChange";

const Colors = ({ setOptions }) => {
    const [foregroundColor, setForegroundColor] = useLocalStorage("foregroundColor", "")
    const [foregroundColor2, setForegroundColor2] = useLocalStorage("foregroundColor2", "")
    const [isGradient, setIsGradient] = useLocalStorage("isGradient", "false")

    const formik = useFormik({
        initialValues: {
            foregroundColor: foregroundColor,
            foregroundColor2: foregroundColor2,

        },
        onSubmit: values => {
            setOptions(options => ({
                ...options, //
            }))
            setForegroundColor(values.foregroundColor)
            setForegroundColor2(values.foregroundColor2)
        },
    });
    const setInputValue = useFormHandleChange(formik);

    //                    <ColorPicker color={foregroundColor} setColor={setForegroundColor} setOptions={setOptions} />

    //error={formik.touched.foregroundColor && Boolean(formik.errors.foregroundColor)}
    // helperText={formik.touched.foregroundColor && formik.errors.foregroundColor}

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box py={2} display='flex' sx={{ justifyContent: 'center' }}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Foreground Color:</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={isGradient}
                        onChange={(e) => setIsGradient(e.target.value)}
                    >
                        <FormControlLabel value={"false"} control={<Radio />} label="Single Color" />
                        <FormControlLabel value={"true"} control={<Radio />} label="Gradient" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Grid container spacing={2} >
                <Grid item xs={12} sm={5}>
                    <ColorPicker color={foregroundColor}
                        setColor={setForegroundColor} />
                </Grid>
                <Grid item xs={12} sm={7}>

                </Grid>
                <Grid item xs={12}>


                </Grid>
                <Grid item xs={12} md={6}>


                </Grid>
                <Grid item xs={12} md={6}>


                </Grid>

                <Grid container justifyContent='center' item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Update QR
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Colors;