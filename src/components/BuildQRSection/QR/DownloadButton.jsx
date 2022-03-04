import { Button } from "@mui/material";

const DownloadButton = ({ qrCode, fileExt }) => {

    const onDownloadClick = () => {
        if (!qrCode) return;
        qrCode.download({
            extension: fileExt
        });
    };

    return (
        <Button onClick={onDownloadClick} size="small">Download as is</Button>
    )
}

export default DownloadButton;