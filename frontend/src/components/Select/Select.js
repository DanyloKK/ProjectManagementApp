import styles from "./Select.module.css"
import {useLocation} from "react-router-dom"

const Select = ({input, meta, name, label, options}) => {
    const location = useLocation()
    return (
        <div className={location.pathname === "/Create" ? styles.user__selectBlock  : styles.user__selectBlockEdit}>
            <label htmlFor={name}>{label}</label>
            <select className={styles.user__select} {...input}>
                <option></option>
                {options.map(option => (
                    <option key={option.id}>{option.value}</option>
                ))}
            </select>
            {meta.touched && meta.error && (
                <span className={styles.user__error}>{meta.error}</span>
            )}
        </div>
    )
}
export default Select;