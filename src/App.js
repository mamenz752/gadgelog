import './App.css';
import Footer from './components/saya/Footer';
import Header from './components/saya/Header';
import CommonPresenter from './components/layouts/CommonPresenter';

function App() {
  return (
    <div className="App">
      <Header />
        <CommonPresenter />
      <Footer />
    </div>
  );
}

export default App;
