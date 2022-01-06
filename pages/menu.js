import styles from "../styles/Menu.module.css";
import Image from "next/image";

const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/Images/Menu.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/Images/Menu2.jpg" layout="fill" objectFit="contain"/>
            </div>
        </div>
    )
}

export default Menu
