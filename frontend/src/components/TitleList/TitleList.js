import img1 from "../../assets/svg/Ellipse 1.svg"
import img2 from "../../assets/svg/mingcute_notification-fill.svg"
import img3 from "../../assets/svg/iconoir_message-solid.svg"
import styles from "./TitleList.module.css"

const TitleList = () => {
    const titles = [
        {id: 1, imgSrc: img2, alt: "NotificationIcon"},
        {id: 2, imgSrc: img3, alt: "MessageIcon"},
        {id: 3, imgSrc: img1, alt: "UserIcon"},
        {id: 4, name: "Alex Smith"},
    ];
    return (
        <ul className={styles.header__list}>
            {titles.map((title) => (
                <li className={title.name ? `${styles.header__userName} ${styles.header__userNameColor}` : styles.header__logo}
                    key={title.id}>
                    {title.imgSrc ? <img src={title.imgSrc} alt={title.alt}/> : title.name}
                </li>
            ))}
        </ul>
    )
}
export default TitleList;