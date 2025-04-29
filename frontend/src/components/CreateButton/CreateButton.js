import styles from "./CreateButton.module.css"
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';

const CreateButton = ({submitting,handleLocalStorage}) => {
    const location = useLocation();
    const navigate = useNavigate();
     const handleRedirect = () => {
        navigate("/Create");
    }
    return (
        <button disabled={submitting} type={location.pathname === "/Projects" ? "button" : "submit"} onClick={handleRedirect}
                className={`${styles.projects__activeBtn} ${styles.projects__activeBtnColor}`}>Create project</button>
    )
}
export default CreateButton;