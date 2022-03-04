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

const useFormPicker = (qrType, options, setOptions) => {
    const [form, setForm] = useState('')

    useEffect(() => {
        switch (qrType) {
            case 'URL':
                setForm(<Url options={options} setOptions={setOptions} />); break;
            case 'TEXT':
                setForm(<Text options={options} setOptions={setOptions} />); break;
            case 'VCARD':
                setForm(<Vcard options={options} setOptions={setOptions} />); break;
            case 'LOCATION':
                setForm(<Location options={options} setOptions={setOptions} />); break;
            case 'EVENT':
                setForm(<Event options={options} setOptions={setOptions} />); break;
            case 'WIFI':
                setForm(<Wifi options={options} setOptions={setOptions} />); break;
            case 'CRYPTO':
                setForm(<Crypto options={options} setOptions={setOptions} />); break;
            case 'EMAIL':
                setForm(<Email options={options} setOptions={setOptions} />); break;
            case 'SMS':
                setForm(<Sms options={options} setOptions={setOptions} />); break;
            default:
                setForm(<Url options={options} setOptions={setOptions} />); break;
        }
    }, [qrType, options, setOptions])

    return form;
}

export default useFormPicker;