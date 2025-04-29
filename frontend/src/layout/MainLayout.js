import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header"
import SideMenu from "../components/SideMenu/SideMenu";
import styles from "./MainLayout.module.css"
const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <div className={styles.container}>
                    <SideMenu/>
                    <Outlet />
                </div>
            </main>
        </>
    )
}
export default MainLayout;