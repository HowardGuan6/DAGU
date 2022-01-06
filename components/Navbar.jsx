import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.logo}>
                    <Image src="/Images/DaGu_Logo.png" width="300" height="96"/>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.links}>
                    <Link href="/"><li className={styles.link}>HOME</li></Link>
                    <Link href="/about"><li className={styles.link}>ABOUT US</li></Link>
                    <Link href="/menu"><li className={styles.link}>MENU</li></Link>
                    <Link href="/contact"><li className={styles.link}>CONTACT US</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
