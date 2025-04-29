import Forms from "../Form/Form"
import styles from "../../pages/Common.module.css"
import editStyles from "./EditProjects.module.css"
import DeleteButton from "../DeleteButton/DeleteButton";
import { useParams } from 'react-router-dom';
import ModalWindow from "../ModalWindow/ModalWindow"
import {useState} from "react";
const EditProjects = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const titleLocal = JSON.parse(localStorage.getItem('formState')) || [];
    const project = titleLocal.find(item => String(item.id) === id);
    return (
        <div className={`${styles.projects} ${styles.projectsColor}`}>
            <ModalWindow id={id} open={open} setOpen={setOpen}/>
            <div className={editStyles.edit__title} >
                <h2 className={editStyles.edit__head}>
                    {project ? project.name : "No project"}
                </h2>
                <DeleteButton handleOpen={handleOpen}/>
            </div>
            <Forms initialValue={project}/>
        </div>
    )
}
export default EditProjects;