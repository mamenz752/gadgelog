import './App.css';
import FooterDemo from './components/layouts/FooterDemo';
import CommonPresenter from './components/saya/CommonPresenter';
import List from './components/maeken/list';

function App() {
  return (
    <div className="App">
      <CommonPresenter />
      <FooterDemo />
      <List />
    </div>
  );
}

export default App;
