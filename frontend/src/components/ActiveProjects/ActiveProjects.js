import CreateButton from "../CreateButton/CreateButton"
import styles from "./ActiveProjects.module.css"
import {useEffect, useState} from "react";
import logo from "../../assets/svg/iconoir_message-solid.svg"
import notification from "../../assets/svg/mingcute_notification-fill.svg"
import {useNavigate} from 'react-router-dom';

const ActiveProjects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/Edit/${id}`);
    }
    useEffect(() => {
        const formState = localStorage.getItem('formState');
        let storedProjects = [];

        if (formState && formState !== 'undefined') {
            storedProjects = JSON.parse(formState);
        }

        console.log(storedProjects);
        setProjects(storedProjects);
    }, []);
    return (
        <div>
            <div className={styles.projects__active}>
                <h2 className={`${styles.projects__titleActive} ${styles.projects__titleActiveColor}`}>Active
                    Projects</h2>
                <CreateButton/>
            </div>
            <div className={styles.projects__block}>
                {projects.map((project) => (
                    !("late" in project) && (
                        <article
                            key={project.id}
                            onClick={() => handleNavigate(project.id)}
                            className={styles.projects__created}>
                            <h3 className={styles.projects__title}>{project.name}</h3>
                            <p className={`${styles.projects__text} ${styles.projects__textColor}`}>{project.description}</p>
                            <div className={styles.projects__img}>
                                <div>
                                    <p>Deadline:{project.deadline}</p>
                                    <p>Position:{project.field}</p>
                                    <p>Experience:{project.experience > 1 ?
                                        `${project.experience} years` :
                                        `${project.experience} year`}</p>
                                </div>
                                <div>
                                    <img className={styles.projects__svg} src={logo} alt="Logo"/>
                                    <img src={notification} alt="Notification"/>
                                </div>
                            </div>
                        </article>
                    )
                ))}
            </div>
        </div>
    )
}
export default ActiveProjects;