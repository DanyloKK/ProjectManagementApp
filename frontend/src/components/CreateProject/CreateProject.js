import activeStyles from "../ActiveProjects/ActiveProjects.module.css";
import commonStyles from "../../pages/Common.module.css";
import Forms from "../Form/Form"

const CreateProject = () => {
    return (
        <div className={`${commonStyles.projects} ${commonStyles.projectsColor}`}>
            <h2 className={`${activeStyles.projects__titleActive} ${activeStyles.projects__titleActiveColor}`}>Creating
                project</h2>
            <Forms/>
        </div>
    )
}
export default CreateProject;