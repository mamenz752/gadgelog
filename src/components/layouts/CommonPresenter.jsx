import ArticleListsPresenter from './ArticleListsPresenter';
import styles from '../../styles/layouts/Common.module.css';

function CommonPresenter() {
  return (
    <div className={ styles.container }>
      <ArticleListsPresenter />
    </div>
  )
}

export default CommonPresenter;