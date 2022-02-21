import STEP1_CONTENT from "./STEP1_CONTENT";
import STEP2_COLORS from "./STEP2_COLORS";
import STEP3_LOGO from "./STEP3_LOGO";
import STEP4_STYLE from "./STEP4_STYLE";
import STEP5_FINISH from "./STEP5_FINISH";

const StepSwitcher = ({ activeStep }) => {

    switch (activeStep) {
        case 0:
            return <STEP1_CONTENT />
        case 1:
            return <STEP2_COLORS />
        case 2:
            return <STEP3_LOGO />
        case 3:
            return <STEP4_STYLE />
        case 4:
            return <STEP5_FINISH />
        default:
            return 'whoops'
    }
}

export default StepSwitcher;