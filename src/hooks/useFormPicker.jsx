import { useState, useEffect } from "react";
import Url from "../components/BuildQRSection/Settings/Step2_Content/forms/Url";
import Text from "../components/BuildQRSection/Settings/Step2_Content/forms/Text";
import Vcard from "../components/BuildQRSection/Settings/Step2_Content/forms/Vcard";
import Location from "../components/BuildQRSection/Settings/Step2_Content/forms/Location";
import Event from "../components/BuildQRSection/Settings/Step2_Content/forms/Event";
import Wifi from "../components/BuildQRSection/Settings/Step2_Content/forms/Wifi";
import Crypto from "../components/BuildQRSection/Settings/Step2_Content/forms/Crypto";
import Email from "../components/BuildQRSection/Settings/Step2_Content/forms/Email";
import Sms from "../components/BuildQRSection/Settings/Step2_Content/forms/Sms";

const useFormPicker = (qrType) => {
    const [form, setForm] = useState('')

    useEffect(() => {
        switch (qrType) {
            case 'URL':
                setForm(<Url />); break;
            case 'TEXT':
                setForm(<Text />); break;
            case 'VCARD':
                setForm(<Vcard />); break;
            case 'LOCATION':
                setForm(<Location />); break;
            case 'EVENT':
                setForm(<Event />); break;
            case 'WIFI':
                setForm(<Wifi />); break;
            case 'CRYPTO':
                setForm(<Crypto />); break;
            case 'EMAIL':
                setForm(<Email />); break;
            case 'SMS':
                setForm(<Sms />); break;
            default:
                setForm(<Url />); break;
        }
    }, [qrType])

    return form;
}

export default useFormPicker;