import List from "../maeken/list"
import styles from "../../styles/layouts/ArticleLists.module.css"
import articles from"../../db/data.json"

const ArticleListsPresenter = () => {
  return (
    <div className={styles.lists}>
       {
        articles.map((article)=>
          <List 
          imag1={article.titleImg}
          title={article.title}
          text={article.introduction} 
          id={article.id}
        />
          )
      } 
      
      
    </div>
  )
}

export default ArticleListsPresenter