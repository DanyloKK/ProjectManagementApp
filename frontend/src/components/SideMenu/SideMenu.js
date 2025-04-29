import {NavLink} from "react-router-dom";
import styles from "./SideMenu.module.css"

const SideMenu = () => {
    const links = [
        {id: 1, to: "/", label: "Main page"},
        {id: 2, to: "/projects", label: "Projects"},
        {id: 3, to: "/vacancies", label: "Vacancies"},
        {id: 4, to: "/people", label: "People"},
        {id: 5, to: "/tests", label: "Tests"},
        {id: 6, to: "/settings", label: "Settings"},
    ];
    return (
        <aside>
            <nav className={styles.nav}>
                {links.map((link) => (
                    <NavLink
                        to={link.to}
                        key={link.to}
                        className={`${styles.nav__item} ${styles.nav__itemColor}`}
                    >{link.label}</NavLink>
                ))}
            </nav>
        </aside>
    )
}
export default SideMenu;