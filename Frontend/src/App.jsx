import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Registration/Layout";
import LoginPage from "./pages/registration/LoginPage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import Website from "./pages/website/Website";
import WebHome from "./pages/website/WebHome";
import WebProduct from "./pages/website/WebProduct";
import WebCart from "./pages/website/WebCart";
import AdminLayout from "./components/Admin/AdminLayout";
import Display from "./pages/Admin/Display";
import AddProduct from "./pages/Admin/AddProduct";
import Checkout from "./pages/website/WebCheckout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RegistrationPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Route for Website */}
        <Route path="/website" element={<Website />}>
          <Route index element={<WebHome />} />
          <Route path="Webhome" element={<WebHome />} />
          <Route path="products" element={<WebProduct />} />
          <Route path="cart" element={<WebCart />} />
          <Route path="checkOut" element={<Checkout />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Display />} />
          <Route path="display" element={<Display />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
