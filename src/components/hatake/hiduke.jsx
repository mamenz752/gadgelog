import styles from "../../styles/hatake/hiduke.module.css";

function Hiduke({title,hiduke}){
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>{hiduke}</p>
    </div>
    )
}
export default Hiduke;