import { useEffect, useState } from 'react'
import QRCode from 'qrcode';
import { useSnackbar } from 'notistack';

const QR = ({ text, options }) => {
    const [src, setSrc] = useState('')
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const generateQR = async () => {
            try {
                const data = await QRCode.toDataURL(text, options)
                setSrc(data);
                enqueueSnackbar((`QR code successfully generated`), { variant: 'success' })

            } catch (error) {
                enqueueSnackbar((`${error.message}`), { variant: 'error' })
            }
        }
        generateQR();
    }, [text, options, enqueueSnackbar])

    return (
        <img src={src} alt='qrImage'></img>
    )
}

export default QR;