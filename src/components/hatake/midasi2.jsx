import styles from "../../styles/hatake/midasi2.module.css";

function Midasi2({melit,text}){
    return(
        <div className={styles.content}>
        <h1>{melit}</h1>
        <div className={styles.double_line}></div>
        <p className={styles.text}>{text}</p>
    </div>
    )
}
export default Midasi2;