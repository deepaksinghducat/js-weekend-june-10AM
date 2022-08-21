import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Address from "./pages/Address";
import Order from "./pages/Order";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us/:name/:email" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="address" element={<Address />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
