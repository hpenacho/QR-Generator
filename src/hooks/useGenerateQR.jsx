import { useEffect, useState } from "react";
import QRCodeStyling from "qr-code-styling";

const useGenerateQR = (options) => {
    const [qrCode] = useState(new QRCodeStyling(options));

    useEffect(() => {
        if (!qrCode) return;
        qrCode.update(options);
    }, [qrCode, options]);

    return qrCode;
}

export default useGenerateQR;

