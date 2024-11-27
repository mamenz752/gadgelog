import styles from "../../styles/hatake/ikon.module.css";
import ProfileImage from "./image/profile.png"


function Ikon({NAME,text,ProfileImage}){
    return(
        <div className={styles.card}>
        <div className={styles.image}>
            <img src={ProfileImage} alt="近大太郎" className="profile_img" />
        </div>
        <div className={styles.text}>
            <h2>{NAME}</h2>
            <p>{text}</p>
        </div>
    </div>
    )
}
export default Ikon;