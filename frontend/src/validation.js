import {validationSchema} from "./components/Form/Form";
export const validation = async (values) => {
    try {
        await validationSchema.validate(values, {abortEarly: false});
        return {};
    } catch (error) {
        console.log(error)
        const errors = {}
        error.inner.forEach((e) => {
            console.log(error.inner)
            errors[e.path] = e.message;
        });
        return errors;
    }
}