import Hiduke from '../hatake/hiduke';
import Ikon from '../hatake/ikon';
import Midasi1 from '../hatake/midasi1';
import Midasi2 from '../hatake/midasi2';
import Midasi3 from '../hatake/midasi3';
import ArticleListsPresenter from './ArticleListsPresenter';

function CommonPresenter() {
  return (
    <>
      <Hiduke />
      <Ikon />
      <Midasi1 />
      <Midasi2 />
      <Midasi3 />
      <ArticleListsPresenter />
    </>
  )
}

export default CommonPresenter;