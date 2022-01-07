import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
    const formRef = useRef();
    const [send, setSend] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p5499dc', 'template_aios74t', formRef.current, 'user_N9vamgYKYWtfHrloV5JNN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            setSend(true);
    }

    return (
        <div className={styles.container}>
            <p className={styles.desc}>
                <b>Any Question About Us?</b> Please feel free to send us an email and ask any questions or make a 
                reservation! <b>(Please leave us your contact number if you are making a reservation, and we will call you back to comfirm your reservation shortly.)</b>
            </p>
            <form className={styles.formArea} ref={formRef} onSubmit={handleSubmit}>
                <input className={styles.textInput} type="text" placeholder="Name"  name="user_name"/>
                <input className={styles.textInput} type="text" placeholder="Subject"  name="user_subject"/>
                <input className={styles.textInput} type="text" placeholder="Please leave your Email"  name="user_email"/>
                <textarea className={styles.textfield} rows="5" placeholder="Message" name="message"/>
                <button className={styles.submitButton}>Submit</button>
                {send && <div className={styles.done}><b>We Have Received Your Email!......</b></div>}
            </form>
        </div>
    )
}

export default ContactForm
