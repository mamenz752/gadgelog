import List from "../maeken/list"
import styles from "../../styles/layouts/ArticleLists.module.css"

const ArticleListsPresenter = () => {
  return (
    <div className={styles.lists}>
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default ArticleListsPresenter