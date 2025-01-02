import { Outlet } from "react-router-dom";
import Header from "../Registration/Header";
import Footer from "../Registration/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
