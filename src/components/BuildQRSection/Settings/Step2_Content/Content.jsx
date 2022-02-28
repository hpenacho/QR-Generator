import useFormPicker from "../../../../hooks/useFormPicker";
import TypeButtonGroup from "./TypeButtonGroup";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

const Content = ({ qrType, setQrType }) => {
    const form = useFormPicker(qrType)

    return (
        <Stack direction='row'>
            <TypeButtonGroup type={qrType} setType={setQrType} />
            <Box py={2}>
                {form}
            </Box>
        </Stack>
    )
}

export default Content;
