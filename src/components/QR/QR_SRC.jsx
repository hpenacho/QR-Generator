import { useEffect, useState } from 'react'
import QRCode from 'qrcode';
import { useSnackbar } from 'notistack';
import { CardMedia } from '@mui/material';

const QR_SRC = ({ text, options }) => {
    const [src, setSrc] = useState('')
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const generateQR = async () => {
            try {
                const data = await QRCode.toDataURL(text, options)
                setSrc(data);
                // enqueueSnackbar((`QR code successfully generated`), { variant: 'success' })

            } catch (error) {
                enqueueSnackbar((`${error.message}`), { variant: 'error' })
            }
        }
        generateQR();
    }, [text, options, enqueueSnackbar])

    return (
        <CardMedia
            component="img"
            src={src}
            alt="QR Image"
        />
    )
}

export default QR_SRC;