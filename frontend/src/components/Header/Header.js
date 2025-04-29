import TitleList from '../TitleList/TitleList';
import styles from "./Header.module.css"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={`${styles.header__title} ${styles.header__titleColor}`}>Trood Community</h1>
                <TitleList/>
            </div>
            </header>
    )
}
export default Header;