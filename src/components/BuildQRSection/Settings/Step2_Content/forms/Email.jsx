import { Button, TextField } from "@mui/material";

const Email = ({
    email, setEmail,
    subject, setSubject,
    emailBody, setEmailBody,
    setOptions
}) => {

    const handleClick = () => {
        setOptions(options => ({
            ...options,
            data: `mailto:${email}?subject=${subject}&body=${emailBody}`
        }));
    };

    return (
        <>
            <TextField
                value={email}
                fullWidth
                onChange={e => setEmail(e.target.value)}
                label="Email"
                sx={{ maxWidth: 550 }}
            />

            <TextField
                value={subject}
                fullWidth
                onChange={e => setSubject(e.target.value)}
                label="Subject"
                sx={{ maxWidth: 550 }}
            />

            <TextField
                value={emailBody}
                fullWidth
                onChange={e => setEmailBody(e.target.value)}
                label="Message"
                multiline
                sx={{ maxWidth: 550 }}
                rows={6}

            />

            <Button onClick={handleClick} type="submit" variant="contained" color="primary">
                Update QR
            </Button>

        </>
    )
}

export default Email;