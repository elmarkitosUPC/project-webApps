import styles from "../styles/tictactoe.module.css";
import './style.css'
import Board from "./Board";

export default function Page_TicTacToe() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Board />
            </main>
        </div>
    );
}
