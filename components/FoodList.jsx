import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";

const FoodList = () => {
    const specialFood = [
        {
            name: 'Fresh Watermelon Juice',
            image:'/Images/specialFood/Fresh_Watermelon_Juice.jpg',
        },
        {
            name: 'Mango Yakult',
            image:'/Images/specialFood/Mango_Yakult.jpg',
        },
        {
            name: 'Mountain Cliff Mushrooms Rice Noodles',
            image:'/Images/specialFood/Moutain_Cliff_Mushrooms_Rice_Noodles.jpg',
        },
        {
            name: 'Rice Noodle Soup With Fresh Shrimps',
            image:'/Images/specialFood/Rice_Noodle_Soup_with_Fresh_Shrimps.jpg',
        },
        {
            name: 'Sliced Beef',
            image:'/Images/specialFood/Sliced_Beef.jpg',
        },
        {
            name: 'Salt & Vinegar Cucumber',
            image:'/Images/specialFood/Salt_Vinegar_cucumber.jpg',
        },
        {
            name: 'Tomato Flavored Rice Noodle Soup',
            image:'/Images/specialFood/Tomato_Flavored_Rice_Noodle_Soup.jpg',
        },
        {
            name: 'Vegetables Side Dishes Add On',
            image:'/Images/specialFood/Vegetables_Side_Dish.jpg',
        },
        {
            name: 'Beef Soup Rice Noodles',
            image:'/Images/specialFood/Beef_Soup_Rice_Noodles.jpg',
        },
    ]
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST NOODLE IN CALGARY</h1>
            <p className={styles.desc}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DaGu Rice Noodle is a restaurant chain beloved across China for its hearty
                and fresh bowls of noodles soup.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Today, DaGu Rice Noodle restaurant are open 24/7 in two location of Calgary(downtown Calgary and Country Hill),
                and we determined to contribute our passion of Chinese traditional food to Calgary.
                You all are invited warmly!
            </p>
            <div className={styles.wrapper}>
                {specialFood.map((food, i)=>(
                    <FoodCard food={food} key={i} />
                ))}
            </div>
        </div>
    )
}

export default FoodList
