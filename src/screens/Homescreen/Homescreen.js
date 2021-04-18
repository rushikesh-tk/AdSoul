import React from 'react';
import styles from './Homescreen.module.css';
import { ReactComponent as Pic1 } from "../../assets/asset1.svg";
import { ReactComponent as Icon1 } from "../../assets/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/icon4.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import AppItem from '../../components/AppItem/AppItem';

const Homescreen = () => {
    return (
        <div className={styles.container}>
            <section className={styles.left}>
                <div className={styles.brand}>
                    <h1>ADSOUL</h1>
                    <Pic1/>
                </div>

                <div className={styles.features}>
                    <h2>Revenue Optimization</h2>

                    <div className={styles.icons}>
                        <div>
                            <Icon1/>
                            <p>Fill Rate</p>
                        </div>
                        
                        <div>
                            <Icon2/>
                            <p>Improve CTR</p>
                        </div>

                        <div>
                            <Icon3/>
                            <p>Refresh Rate</p>
                        </div>

                        <div>
                            <Icon4/>
                            <p>Quick Integration</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.right}>
                <div className={styles.header}>
                    <h2>Apps</h2>
                    <Settings/>
                </div>

                <div className={styles.apps}>
                    <AppItem/>
                    <AppItem/>
                    <AppItem/>
                    <AppItem/>
                    <AppItem/>
                    <AppItem/>
                </div>
            </section>
        </div>
    )
}

export default Homescreen;