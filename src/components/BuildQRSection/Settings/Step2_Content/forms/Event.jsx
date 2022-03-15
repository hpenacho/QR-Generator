import { Button, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import useFormHandleChange from "../../../../../hooks/useFormHandleChange";
import useLocalStorage from "../../../../../hooks/useLocalStorage";

const Event = ({ setOptions }) => {
    const [summary, setSummary] = useLocalStorage("eventSummary", "")
    const [description, setDescription] = useLocalStorage("eventDescription", "")
    const [location, setLocation] = useLocalStorage("eventLocation", "")
    const [startTime, setStartTime] = useLocalStorage("eventStart", "")
    const [endTime, setEndTime] = useLocalStorage("eventEnd", "")

    const formik = useFormik({
        initialValues: {
            summary: summary,
            description: description,
            location: location,
            startTime: startTime,
            endTime: endTime
        },
        onSubmit: values => {
            setOptions(options => ({
                ...options, //
                data: `BEGIN:VCALENDAR\nBEGIN:VEVENT\nSUMMARY:${values.summary}\nDESCRIPTION:${values.description}\nLOCATION:${values.location}\nDTSTART:${values.startTime.replace(/-|:/g, '')}00\nDTEND:${values.endTime.replace(/-|:/g, '')}00\nEND:VEVENT\nEND:VCALENDAR`
            }))
            setSummary(values.summary)
            setDescription(values.description)
            setLocation(values.location)
            setStartTime(values.startTime)
            setEndTime(values.endTime)
        },
    });
    const setInputValue = useFormHandleChange(formik);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={5}>
                    <TextField
                        fullWidth
                        id="summary"
                        name="summary"
                        label="Title"
                        value={formik.values.summary}
                        onChange={(e) => setInputValue("summary", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <TextField
                        fullWidth
                        id="location"
                        name="location"
                        label="Location"
                        value={formik.values.location}
                        onChange={(e) => setInputValue("location", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        value={formik.values.description}
                        onChange={(e) => setInputValue("description", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        type='datetime-local'
                        id="startTime"
                        name="startTime"
                        label="Start Time"
                        value={formik.values.startTime}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setInputValue("startTime", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        type='datetime-local'
                        id="endTime"
                        name="endTime"
                        label="End Time"
                        value={formik.values.endTime}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setInputValue("endTime", e.target.value)}
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

export default Event;