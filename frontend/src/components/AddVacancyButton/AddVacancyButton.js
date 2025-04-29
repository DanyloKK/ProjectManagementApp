import styles from "./AddVacancyButton.module.css"
const AddVacancyButton = () => {
    return (
        <button  className={`${styles.projects__vacancyBtn} ${styles.projects__vacancyBtnColor}`}>Add vacancy</button>
    )
}
export default AddVacancyButton