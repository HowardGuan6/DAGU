import Image from "next/image";
import styles from "../styles/FoodCard.module.css";


const FoodCard = ({ food }) => {
    return (
        <div className={styles.container}>
            <Image src={food.image} alt="Food" width="500" height="350"/>
            <h1 className={styles.title}>{food.name}</h1>
        </div>
    )
}

export default FoodCard
