import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Registration/Layout";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Website from "./pages/Website";
import WebHome from "./pages/WebHome";
import WebProduct from "./pages/WebProduct";
import WebCart from "./pages/WebCart";
import AdminLayout from "./components/Admin/AdminLayout";
import Display from "./pages/Admin/Display";

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
        <Route path="/website" element={<Website />} >
          <Route index element={<WebHome/>}/>
          <Route path="Webhome" element={<WebHome/>}/>
          <Route path="products" element={<WebProduct/>}/>
          <Route path="cart" element={<WebCart/>}/>
        </Route>

        <Route path="/" element={<AdminLayout/>}>
          <Route index element={<Display/>}/>
          <Route path="display" element={<Display/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
