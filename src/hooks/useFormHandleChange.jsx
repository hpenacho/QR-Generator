import { useCallback } from "react";

const useFormHandleChange = (formik) => {

    const setInputValue = useCallback(
        (key, value) =>
            formik.setValues({
                ...formik.values,
                [key]: value,
            }),
        [formik]
    );

    return setInputValue;
}

export default useFormHandleChange;