import { CardMedia } from "@mui/material";
import useShowPreviewQR from "../../../hooks/useShowPreviewQR";

const PreviewWindow = ({ qrCode }) => {
    const ref = useShowPreviewQR(qrCode);

    return (
        <>
            <CardMedia
                sx={{ backgroundColor: 'white', padding: 1 }}
                ref={ref}
                height="344"
                width="344"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
        </>
    )
}

export default PreviewWindow;