import styles from "./DeleteButton.module.css"

const DeleteButton = ({handleOpen}) => (
    <button onClick={handleOpen}
            className={`${styles.projects__deleteBtn} ${styles.projects__deleteBtnColor}`}>Delete</button>

)
export default DeleteButton