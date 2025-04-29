import styles from "./SaveChangesButton.module.css"

const SaveChangesButton = ({submitting}) => {
     return (
         <button
             type="submit"
             disabled={submitting}
             className={`${styles.edit__saveBtn} ${styles.edit__saveBtnColor}`}>Save Changes</button>
     )
}
export default SaveChangesButton;