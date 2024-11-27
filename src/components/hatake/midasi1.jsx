import styles from "../../styles/hatake/midasi1.module.css";

function Midasi1({midashi,text}){
    return(
    <div className={styles.section}>
    <div className={styles.heading}>{midashi}</div>
    <p>{text}</p>
  </div>
    )
}
export default Midasi1;
