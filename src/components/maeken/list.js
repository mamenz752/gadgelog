import styles from "../../styles/list.module.css";
import image1 from"../maeken/image/image 1.png";

function List(){
    return(
        <div className={styles.list}>
            <img src={image1} alt=""/>
            <div className={styles.title}>
                <h1>タイトルタイトル</h1>
            </div>
            <div className={styles.text}> 
                <p>テキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <button>Find out more</button>
        </div>
    )
}
export default List;