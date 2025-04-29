import styles from "./Input.module.css"
import {useLocation} from "react-router-dom";

const Input = ({input, meta, name, label, type = "text"}) => {
    const location = useLocation();
    const inputClass = location.pathname === `/Create`
        ? styles.user__inputBlock : styles.user__inputBlockEdit
    return (
        <div className={type === "textarea" ? styles.user__textAreaBlock : inputClass}>
            <label htmlFor={name}>{label}</label>
            {type === "textarea" ? <textarea className={styles.user__textarea} {...input} >{name}</textarea>
                : <input type={type} className={styles.user__input} name={name} {...input}/>
            }
            {meta.touched && meta.error && (
                <span className={styles.user__error}>{meta.error}</span>
            )}
        </div>
    )
}
export default Input;