import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Orders from './components/orders';
import SelectedOrder from './components/selectedOrder';
import MainLayout from './components/mainlayout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
<Router>
<ToastContainer />
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/order" element={<Order />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<SelectedOrder />} />
    </Route>
  </Routes>
</Router>
  );
}

export default App;
