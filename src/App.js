import './App.css';
import FooterDemo from './components/layouts/FooterDemo';
import CommonPresenter from './components/saya/CommonPresenter';
import List from './components/maeken/list';
import Ikon from './components/hatake/ikon';
import Midasi1 from './components/hatake/midasi1';

function App() {
  return (
    <div className="App">
      <CommonPresenter />
      <FooterDemo />
      <List />
      <Ikon />
      <Midasi1 />
    </div>
  );
}

export default App;
