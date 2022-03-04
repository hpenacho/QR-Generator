import { useRef, useEffect } from "react";

const useShowPreviewQR = (qrCode) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            qrCode.append(ref.current);
        }
    }, [qrCode, ref]);

    return ref;
}

export default useShowPreviewQR;