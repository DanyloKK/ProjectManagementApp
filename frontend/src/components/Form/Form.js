import {Form, Field} from "react-final-form"
import Input from "../Input/Input"
import Select from "../Select/Select"
import CreateButton from "../CreateButton/CreateButton"
import styles from "./Form.module.css"
import * as Yup from 'yup';
import {validation} from "../../validation";
import {useLocation} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import AddVacancyButton from "../AddVacancyButton/AddVacancyButton";
import SaveChangesButton from "../SaveChangesButton/SaveChangesButton";
import {handleLocalStorage} from "../../helpers/handleLocalStorage";
import {useParams} from "react-router-dom";
import {currentDate} from "../../globalVariables";


export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Username is required")
        .min(5, 'Name of project cant be less than 5 characters')
        .max(35,"Name of project cant be more than 35 characters"),
    field: Yup.string()
        .required("Field is required"),
    experience: Yup.number()
        .required("Experience is required")
        .min(1, "Minimum of experience is 1 year!")
        .max(35,"You are kinda kidding right now?:)"),
    deadline: Yup.date()
        .typeError("Please select a valid date")
        .default(() => new Date())
        .required("Deadline date is required"),
    description: Yup.string()
        .required("Description is required")
        .min(15, "Description is too short")
        .max(100,"Description is too long,be more economic with the letters!")
})
const Forms = ({initialValue}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {id} = useParams();
    const onSubmit = (values) => {
        let projectDate = new Date(values.deadline).getTime();
        let current = currentDate.getTime();
        console.log("SUBMIT TRIGGERED:", values);
        console.log(initialValue)
        if (location.pathname === `/Edit/${id}`) {
            const existingProject = JSON.parse(localStorage.getItem('formState')) || [];
            const updatedValue = {
                ...values,
                ...(projectDate < current ? {late: "Expired"} : {})
            }
            const updatedProjects = existingProject.map(item =>
                item.id === +id ? {...item, ...updatedValue} : item
            )
            handleLocalStorage(updatedProjects);
        } else if (location.pathname === `/Create`) {
            let newFormState;
            if (current > projectDate) {
                newFormState = {
                    id: Date.now(),
                    ...values,
                    late: "Expired",
                };
            } else if (projectDate > currentDate) {
                newFormState = {
                    id: Date.now(),
                    ...values,
                };
            }

            handleLocalStorage(newFormState);
        }
        navigate("/Projects")
    }
    return (
        <Form
            initialValues={location.pathname === "/Create" ? {
                name: '',
                field: '',
                experience: '',
                deadline: '',
                description: '',
            } : {
                name: initialValue?.name || "",
                field: initialValue?.field || "",
                experience: initialValue?.experience || "",
                deadline: initialValue?.deadline || "",
                description: initialValue?.description || "",
            }}
            onSubmit={onSubmit}
            validate={validation}
            render={({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}
                      className={location.pathname === "/Create" ? `${styles.user__form} ${styles.user__formColor}` : `${styles.user__formEdit} ${styles.user__formColor}`}>
                    {location.pathname === "/Create" && (
                        <Field name="name">
                            {({input, meta}) => (
                                <Input
                                    input={input}
                                    meta={meta}
                                    name="name"
                                    label="Name"
                                />
                            )}
                        </Field>
                    )}
                    <Field name="field">
                        {({input, meta}) => (
                            <Select
                                input={input}
                                meta={meta}
                                name="field"
                                label="Field"
                                options={[
                                    {id: 1, value: "Design"},
                                    {id: 2, value: "Development"},
                                    {id: 3, value: "Marketing"},
                                ]}
                            />
                        )}
                    </Field>

                    <Field name="experience">
                        {({input, meta}) => (
                            <Input
                                input={input}
                                meta={meta}
                                name="experience"
                                label="Experience"
                            />
                        )}
                    </Field>

                    <Field name="deadline">
                        {({input, meta}) => (
                            <Input
                                input={input}
                                meta={meta}
                                name="deadline"
                                label="Deadline"
                                type="date"
                            />
                        )}
                    </Field>

                    <Field name="description">
                        {({input, meta}) => (
                            <Input
                                input={input}
                                meta={meta}
                                name="description"
                                label="Description"
                                type="textarea"
                            />
                        )}
                    </Field>
                    {location.pathname === "/Create" ? <CreateButton submitting={submitting}
                        /> :
                        <SaveChangesButton submitting={submitting}/>}
                    {location.pathname === `/Edit/${id}` ? <AddVacancyButton/> : null}
                </form>
            )}
        />
    )
}
export default Forms