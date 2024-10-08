import './App.css';
import FooterDemo from './components/layouts/FooterDemo';
import CommonPresenter from './components/saya/CommonPresenter';
import List from './components/maeken/list';
import Ikon from './components/hatake/ikon';

function App() {
  return (
    <div className="App">
      <CommonPresenter />
      <FooterDemo />
      <List />
      <Ikon />
    </div>
  );
}

export default App;
