import { useState } from "react"

const useInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFiledOnChange = e => {
        setFieldValue(e.target.value);
    }

    return [fieldValue, handleFiledOnChange];
}
export default useInputField;