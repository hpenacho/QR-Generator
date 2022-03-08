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
    const [multiText, setMultiText] = useState('This is \n a multine \n QR textfield!')
    const [url, setUrl] = useState('https://www.linkedin.com/in/hugopenacho/')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [emailBody, setEmailBody] = useState('')

    useEffect(() => {
        switch (qrType) {
            case 'URL':
                setForm(
                    <Url
                        url={url} setUrl={setUrl}
                        setOptions={setOptions}
                    />); break;
            case 'TEXT':
                setForm(
                    <Text
                        multiText={multiText} setMultiText={setMultiText}
                        setOptions={setOptions}
                    />); break;
            case 'VCARD':
                setForm(<Vcard setOptions={setOptions} />); break;
            case 'LOCATION':
                setForm(<Location setOptions={setOptions} />); break;
            case 'EVENT':
                setForm(<Event setOptions={setOptions} />); break;
            case 'WIFI':
                setForm(<Wifi setOptions={setOptions} />); break;
            case 'CRYPTO':
                setForm(<Crypto setOptions={setOptions} />); break;
            case 'EMAIL':
                setForm(
                    <Email
                        email={email} setEmail={setEmail}
                        subject={subject} setSubject={setSubject}
                        emailBody={emailBody} setEmailBody={setEmailBody}
                        setOptions={setOptions}
                    />); break;
            case 'SMS':
                setForm(<Sms setOptions={setOptions} />); break;
            default:
                setForm(<Url setOptions={setOptions} />); break;
        }
    }, [qrType,
        url, setUrl,
        multiText, setMultiText,
        email, setEmail,
        subject, setSubject,
        emailBody, setEmailBody,
        setOptions])

    return form;
}

export default useFormPicker;