import Type from "./Step1_Type/Type"
import Content from "./Step2_Content/Content";
import Colors from "./Step3_Colors/Colors";
import Logo from "./Step4_Logo/Logo";
import Style from "./Step5_Style/Style";
import Finish from "./Step6_Finish/Finish";
import { useState } from "react";

const StepSwitcher = ({ activeStep, setActiveStep }) => {
    const [qrType, setQrType] = useState('URL')
    const [qrData, setQrData] = useState('')

    switch (activeStep) {
        case 0:
            return <Content qrType={qrType} setQrType={setQrType} setQrData={setQrData} />
        case 1:
            return <Colors setQrData={setQrData} />
        case 2:
            return <Logo setQrData={setQrData} />
        case 3:
            return <Style setQrData={setQrData} />
        case 4:
            return <Finish setQrData={setQrData} />
        default:
            return 'whoops'
    }
}

export default StepSwitcher;