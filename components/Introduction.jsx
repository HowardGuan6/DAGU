import styles from "../styles/Introduction.module.css";
import Image from "next/image";
import FoodCard from "./FoodCard";

const Introduction = () => {
    const demoFood = [
        {
            name: 'Sliced Beef and Ox Tongue in Szechuan Chili Sauce',
            image: '/Images/demoFood/fuqifeipian.jpg'
        },
        {
            name: 'Deep-Fried PumpKin Pancake with Red Bean Paste',
            image: '/Images/demoFood/nanguabing.jpg'
        },
        {
            name:'Crispy prok fillet with sichuan peppercorn',
            image: '/Images/demoFood/xiaosurou.jpg'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.detail}>
                <div className={styles.imgContainer}>
                    <Image src="/Images/aboutDaGu.png" width="300" height="450"/>
                </div>
                <div className={styles.storyBoard}>
                    <h1 className={styles.title}>Discovery OUR STORY</h1>
                    <div className={styles.text}>
                        <p>Shanghai Drum Catering Management Co., Ltd. was founded in 2010, 
                        headquartered in Shanghai, mainly engaged in rice series products and local specialty snacks.</p>
                        <p>The company aimed at the high-end catering market. 
                        It has launched its national market in China with Shanghai as its headquarter, 
                        set up branch offices in Guangzhou, Wuhan, Hangzhou, Chengdu and other places. 
                        Nowadays, we opened our branches in Canada and America. DaGu Rice Noodle is opening in Calgary Downtwon and Country Hill location</p>
                        <p>We have some interesting stories that inspired us to launch the business.</p>
                        <p>In the middle of the Ming Dynasty, there was a restaurant without a sign near the flowery Drum tower in Yunnan, Kunming.
                         Whenever the city had a happy news, people rang the drum to celebrate. Along with the joy of drumbeat, 
                         people flocked to the unnamed little restaurant and had bowls of hot rice noodle soup, meaning “smooth long time”. 
                         Because of this joy, with the honesty of the shop owner, the little restaurant eventually became a century-old business.</p>
                        <p>Today, Dagu Rice Noodle restaurant opens in Calgary Downtown and Calgary Country Hill, and we determined to contribute our passion of Chinese traditional food to the colorful city.
                         You all are invited warmly!</p>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                {demoFood.map((food, i)=>(
                    <FoodCard food={food} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Introduction
