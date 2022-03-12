import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Stack } from "@mui/material";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const Wifi = ({ setOptions }) => {
    const [wifiname, setWifiname] = useLocalStorage("networkname", "")
    const [password, setPassword] = useLocalStorage("networkpassword", "")
    const [encryption, setEncryption] = useLocalStorage("networkencryption", "WPA")

    const formik = useFormik({
        initialValues: {
            wifiname: wifiname,
            password: password,
            encryption: encryption,
        },
        onSubmit: values => {
            setOptions(options => ({
                ...options,
                data: `WIFI:S:${values.wifiname};T:${values.encryption};P:${values.password};;`
            }))
            setWifiname(values.wifiname)
            setPassword(values.password)
            setEncryption(values.encryption)
        },
    });

    const setInputValue = useFormHandleChange(formik);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack alignItems='center' spacing={2}>
                <TextField
                    fullWidth
                    id="wifiname"
                    name="wifiname"
                    label="Wireless name (SSID)"
                    value={formik.values.wifiname}
                    onChange={(e) => setInputValue("wifiname", e.target.value)}
                    sx={{ maxWidth: 400 }}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={(e) => setInputValue("password", e.target.value)}
                    sx={{ maxWidth: 300 }}
                />
                <FormControl>
                    <InputLabel id="encryptionLabel">Encryption</InputLabel>
                    <Select
                        labelId="encryptionLabel"
                        id="encryption"
                        name="encryption"
                        value={formik.values.encryption}
                        label="Encryption"
                        onChange={(e) => setInputValue("encryption", e.target.value)}
                        sx={{ width: 148 }}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"WEP"}>WEP</MenuItem>
                        <MenuItem value={"WPA"}>WPA/WPA2</MenuItem>
                    </Select>
                </FormControl>

                <Button type="submit" variant="contained" color="primary">
                    Update QR
                </Button>
            </Stack>
        </form>
    )
}

export default Wifi;