import { Button, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";

const Vcard = ({ setOptions }) => {
    const [firstname, setFirstname] = useLocalStorage("vFirstName", "")
    const [lastname, setLastname] = useLocalStorage("vLastName", "")
    const [organization, setOrganization] = useLocalStorage("vOrganization", "")
    const [position, setPosition] = useLocalStorage("vPosition", "")
    const [phone, setPhone] = useLocalStorage("vPhone", "")
    const [workphone, setWorkphone] = useLocalStorage("vWorkPhone")
    const [email, setEmail] = useLocalStorage("vEmail", "")
    const [website, setWebsite] = useLocalStorage("vWebsite", "")
    const [address, setAddress] = useLocalStorage("vAddress", "")

    const formik = useFormik({
        initialValues: {
            firstname: firstname,
            lastname: lastname,
            organization: organization,
            position: position,
            phone: phone,
            workphone: workphone,
            email: email,
            website: website,
            address: address
        },
        onSubmit: values => {
            setOptions(options => ({
                ...options,
                data: `BEGIN:VCARD\nN:${values.firstname}\nFN:${values.firstname} ${values.lastname}\nTITLE:${values.position}\nORG:${values.organization}\nURL:${values.website}\nEMAIL:${values.email}\nTEL;HOME;VOICE:${values.phone}\nTEL;WORK;VOICE:${values.workphone}\nADR:${values.address}\nEND:VCARD`
            }))
            setFirstname(values.firstname)
            setLastname(values.lastname)
            setOrganization(values.organization)
            setPosition(values.position)
            setPhone(values.phone)
            setWorkphone(values.workphone)
            setEmail(values.email)
            setWebsite(values.website)
            setAddress(values.address)
        },
    });
    const setInputValue = useFormHandleChange(formik);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        fullWidth
                        id="firstname"
                        name="firstname"
                        label="First Name"
                        value={formik.values.firstname}
                        onChange={(e) => setInputValue("firstname", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        fullWidth
                        id="lastname"
                        name="lastname"
                        label="Last Name"
                        value={formik.values.lastname}
                        onChange={(e) => setInputValue("lastname", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={formik.values.phone}
                        onChange={(e) => setInputValue("phone", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        fullWidth
                        id="organization"
                        name="organization"
                        label="Organization"
                        value={formik.values.organization}
                        onChange={(e) => setInputValue("organization", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        fullWidth
                        id="position"
                        name="position"
                        label="Position"
                        value={formik.values.position}
                        onChange={(e) => setInputValue("position", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <TextField
                        fullWidth
                        id="workPhone"
                        name="workPhone"
                        label="Phone (Work)"
                        value={formik.values.workphone}
                        onChange={(e) => setInputValue("workphone", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={(e) => setInputValue("email", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                        fullWidth
                        id="website"
                        name="website"
                        label="Website"
                        value={formik.values.website}
                        onChange={(e) => setInputValue("website", e.target.value)}
                    />
                </Grid>

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
                <Grid container justifyContent='center' item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Update QR
                    </Button>
                </Grid>
            </Grid>
        </form >
    )
}

export default Vcard;