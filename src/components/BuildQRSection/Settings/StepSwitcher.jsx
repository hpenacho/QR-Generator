import Content from "./Step2_Content/Content";
import Colors from "./Step3_Colors/Colors";
import Logo from "./Step4_Logo/Logo";
import Style from "./Step5_Style/Style";
import Finish from "./Step6_Finish/Finish";
import useFormPicker from "../../../hooks/useFormPicker";

const StepSwitcher = ({ activeStep, qrType, setOptions }) => {
    const form = useFormPicker(qrType, setOptions)

    switch (activeStep) {
        case 0:
            return <Content form={form} />
        case 1:
            return <Colors setOptions={setOptions} />
        case 2:
            return <Logo setOptions={setOptions} />
        case 3:
            return <Style setOptions={setOptions} />
        case 4:
            return <Finish setOptions={setOptions} />
        default:
            return 'whoops'
    }
}

export default StepSwitcher;