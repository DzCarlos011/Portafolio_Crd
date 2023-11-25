import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi! My name is Carlos</h1>
                <p className={styles.description}>Im a future enginner! And remember all this is possible</p>
                <a href="dzca011@gmail.com" className={styles.contactBtn}>Contact Me!</a>
            </div>
            <img src={getImageUrl("hero/Imagen1.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}

export default React;