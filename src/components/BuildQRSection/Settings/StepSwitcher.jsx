import Content from "./Step2_Content/Content";
import Colors from "./Step3_Colors/Colors";
import Logo from "./Step4_Logo/Logo";
import Style from "./Step5_Style/Style";
import Finish from "./Step6_Finish/Finish";
import useFormPicker from "../../../hooks/useFormPicker";

const StepSwitcher = ({ activeStep, setActiveStep, qrType, options, setOptions }) => {
    const form = useFormPicker(qrType, setOptions)

    switch (activeStep) {
        case 0:
            return <Content form={form} />
        case 1:
            return <Colors options={options} setOptions={setOptions} />
        case 2:
            return <Logo options={options} setOptions={setOptions} />
        case 3:
            return <Style options={options} setOptions={setOptions} />
        case 4:
            return <Finish options={options} setOptions={setOptions} />
        default:
            return 'whoops'
    }
}

export default StepSwitcher;