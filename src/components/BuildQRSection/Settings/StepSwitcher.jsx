import Content from "./Step2_Content/Content";
import Colors from "./Step3_Colors/Colors";
import Logo from "./Step4_Logo/Logo";
import Style from "./Step5_Style/Style";
import Finish from "./Step6_Finish/Finish";
import { useState } from "react";

const StepSwitcher = ({ activeStep, setActiveStep, qrType, setQrType, options, setOptions }) => {
    const [qrData, setQrData] = useState('')

    switch (activeStep) {
        case 0:
            return <Content qrType={qrType} setQrType={setQrType} setQrData={setQrData} setOptions={setOptions} />
        case 1:
            return <Colors setQrData={setQrData} options={options} setOptions={setOptions} />
        case 2:
            return <Logo setQrData={setQrData} options={options} setOptions={setOptions} />
        case 3:
            return <Style setQrData={setQrData} options={options} setOptions={setOptions} />
        case 4:
            return <Finish setQrData={setQrData} options={options} setOptions={setOptions} />
        default:
            return 'whoops'
    }
}

export default StepSwitcher;