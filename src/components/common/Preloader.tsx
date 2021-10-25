import styles from "../Users/Users.module.css";
import Scanning from "../asses/Scanning.gif";
import React from "react";

export let Preloader = () => {
    return (
        <div className={styles.scanning}>
            <img className={styles.scanning} src={Scanning}/>
        </div>
    )
}