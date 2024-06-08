import React from "react";
import styles from "../styles/minesweeper.module.css";
import './style.css'
import Board from "./component/components/Board";

function Page_Minesweeper() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Board />
            </main></div>
    );
}

export default Page_Minesweeper;
