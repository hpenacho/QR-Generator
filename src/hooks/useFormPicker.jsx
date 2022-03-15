import { useState, useEffect } from "react";
import Url from "../components/BuildQRSection/Settings/Step2_Content/forms/Url";
import Text from "../components/BuildQRSection/Settings/Step2_Content/forms/Text";
import Vcard from "../components/BuildQRSection/Settings/Step2_Content/forms/Vcard";
import Location from "../components/BuildQRSection/Settings/Step2_Content/forms/Location";
import Event from "../components/BuildQRSection/Settings/Step2_Content/forms/Event";
import Wifi from "../components/BuildQRSection/Settings/Step2_Content/forms/Wifi";
import Email from "../components/BuildQRSection/Settings/Step2_Content/forms/Email";
import Phone from "../components/BuildQRSection/Settings/Step2_Content/forms/Phone";
import Sms from "../components/BuildQRSection/Settings/Step2_Content/forms/Sms";

const useFormPicker = (qrType, setOptions) => {
    const [form, setForm] = useState('')

    useEffect(() => {
        switch (qrType) {
            case 'URL':
                setForm(<Url setOptions={setOptions} />); break;
            case 'TEXT':
                setForm(<Text setOptions={setOptions} />); break;
            case 'VCARD':
                setForm(<Vcard setOptions={setOptions} />); break;
            case 'LOCATION':
                setForm(<Location setOptions={setOptions} />); break;
            case 'EVENT':
                setForm(<Event setOptions={setOptions} />); break;
            case 'WIFI':
                setForm(<Wifi setOptions={setOptions} />); break;
            case 'EMAIL':
                setForm(<Email setOptions={setOptions} />); break;
            case 'PHONE':
                setForm(<Phone setOptions={setOptions} />); break;
            case 'SMS':
                setForm(<Sms setOptions={setOptions} />); break;
            default:
                setForm(<Url setOptions={setOptions} />); break;
        }
    }, [qrType, setOptions])

    return form;
}

export default useFormPicker;