import {Routes, Route, Navigate} from 'react-router-dom';
import MainLayout from "../layout/MainLayout";
import Main from "../pages/Main";
import Projects from "../pages/Projects";
import CreateProject from "../components/CreateProject/CreateProject";
import EditProjects from "../components/EditProjects/EditProjects";
const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Main/>}/>
                <Route path="Projects" element={<Projects/>}/>
                <Route path="Create" element={<CreateProject/>}/>
                <Route path="Edit/:id"  element={<EditProjects/>}/>
                <Route path="*" element={<Navigate to="/Projects"/>}/>
            </Route>
        </Routes>
    );
};

export default Routing;