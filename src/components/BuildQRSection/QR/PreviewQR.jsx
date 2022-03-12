import { CardMedia } from "@mui/material";
import useShowPreviewQR from "../../../hooks/useShowPreviewQR";
import "./QRsheet.css"

const PreviewWindow = ({ qrCode }) => {
    const ref = useShowPreviewQR(qrCode);

    return (
        <CardMedia
            sx={{ backgroundColor: 'white', padding: 1 }}
            ref={ref}
            className={'qr-code'}
            image="/static/images/cards/"
            alt="qr"
        />
    )
}

export default PreviewWindow;