import Type from "./Step1_Type/Type"
import Content from "./Step2_Content/Content";
import Colors from "./Step3_Colors/Colors";
import Logo from "./Step4_Logo/Logo";
import Style from "./Step5_Style/Style";
import Finish from "./Step6_Finish/Finish";
import { useState } from "react";

const StepSwitcher = ({ activeStep }) => {
    const [qrType, setQrType] = useState('URL')
    const [qrData, setQrData] = useState('')

    switch (activeStep) {
        case 0:
            return <Type setQrType={setQrType} />
        case 1:
            return <Content qrType={qrType} setQrData={setQrData} />
        case 2:
            return <Colors setQrData={setQrData} />
        case 3:
            return <Logo setQrData={setQrData} />
        case 4:
            return <Style setQrData={setQrData} />
        case 5:
            return <Finish setQrData={setQrData} />
        default:
            return 'whoops'
    }
}

export default StepSwitcher;