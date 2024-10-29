import './App.css';
import { AppRoutes } from './routes/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/saya/Footer';
import Header from './components/saya/Header';

const router = createBrowserRouter(AppRoutes);

function App() {
  return (
    <div className="App">
      <Header />
        <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
