import styles from "./Common.module.css"
import ActiveProjects from "../components/ActiveProjects/ActiveProjects"
import PassedProjects from "../components/PassedProjects/PassedProjects"

const Projects = () => {
    return (
        <div className={`${styles.projects} ${styles.projectsColor}`}>
            <ActiveProjects/>
            <PassedProjects/>
        </div>
    )
}
export default Projects;