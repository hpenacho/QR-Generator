import useFormPicker from "../../../../hooks/useFormPicker";
import { Stack } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

const Content = ({ qrType, setQrType }) => {
    const form = useFormPicker(qrType)

    return (
        <>
            <Box p={2}>
                {form}
            </Box>
        </>
    )
}

export default Content;
