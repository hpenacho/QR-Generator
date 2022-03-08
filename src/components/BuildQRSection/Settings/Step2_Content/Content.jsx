import useFormPicker from "../../../../hooks/useFormPicker";
import { Stack } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

const Content = ({ form }) => {

    return (
        <>
            <Box p={2}>
                <Stack alignItems='center' spacing={2}>
                    {form}
                </Stack>
            </Box>

        </>
    )
}

export default Content;
