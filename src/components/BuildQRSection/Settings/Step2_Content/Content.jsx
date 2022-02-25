import useFormPicker from "../../../../hooks/useFormPicker";

const Content = ({ qrType }) => {
    const form = useFormPicker(qrType)
    return (
        <>
            {form}
        </>
    )
}

export default Content;