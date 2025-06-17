import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrdersA from "./pages/ordersA"
import Items from "./pages/items"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Additems from "./pages/additems"
import Navbar from "./components/navbar";
import Sidebar from "./helpers/sidebar";
import Footer from './components/footer';
const App = () => {
  return (
    <BrowserRouter>
    <div>
       <ToastContainer></ToastContainer>
    <Navbar />
    <div className="admin-panel mt-4  space-y-5">
      <Sidebar></Sidebar>
      <div className="admin-content">
        <Routes>
        <Route path="/orders" element={<OrdersA />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additems" element={<Additems  />} />
        </Routes>
        
      </div>
    </div>
    <Footer />
  </div>
  </BrowserRouter>
  )
}

export default App
