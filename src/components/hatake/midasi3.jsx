import styles from "../../styles/hatake/midasi3.module.css";

function Midasi3({text}){
    return(
        <div className={styles.box}>
        <ul>
            {

                console.log(Array.isArray(text))
            }
            {
                text.map((item, key) => <li key={key}>{item}</li>)
            }
        </ul>
    </div>
    )
}
export default Midasi3;