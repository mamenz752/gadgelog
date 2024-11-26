import { Link } from "react-router-dom";
import styles from "../../styles/list.module.css";
import image1 from"../maeken/image/image 1.png";

function List({title,text,id}){
    return(
        <div className={styles.list}>
            <img src={image1} alt=""/>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.text}> 
                <p>{text}</p>
            </div>
            <button className={styles.linkButton}><Link to={`/articles/${id}`}>Find out more</Link></button>
        </div>
    )
}
export default List;