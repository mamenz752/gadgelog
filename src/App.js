import './App.css';
import FooterDemo from './components/layouts/FooterDemo';
import CommonPresenter from './components/saya/CommonPresenter';
import List from './components/maeken/list';
import Ikon from './components/hatake/ikon';
import Midasi1 from './components/hatake/midasi1';
import Midasi2 from './components/hatake/midasi2';
import Midasi3 from './components/hatake/midasi3';

function App() {
  return (
    <div className="App">
      <CommonPresenter />
      <FooterDemo />
      <List />
      <Ikon />
      <Midasi1 />
      <Midasi2 />
      <Midasi3 />
    </div>
  );
}

export default App;
