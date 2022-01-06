import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        WE ARE THE NO.1 CHINESE RICE NOODLES RESTAURANT IN CALGARY
                    </h2>
                    <Image src="/Images/DaGu_Logo.png" alt="DaGu Logo" width="300" height="120"/>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>RESTAURANT ADDRESS</h1>
                    <p className={styles.text}>
                        310 Centre St S,
                        < br />Calgary, AB T2G5J8
                        < br />(587)-352-0088
                    </p>
                    <p className={styles.text}>
                        40 Country Hill Landing NW,
                        < br />Calgary, AB T3K5P4
                        < br />(403)-474-9988
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        SUNDAY TO THURSDAY
                        <br />11a.m - 8p.m
                    </p>
                    <p className={styles.text}>
                        FRIDAY TO SATURDAY
                        <br />11a.m - 8:30p.m
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
