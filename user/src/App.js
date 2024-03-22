import "./App.css";
import "./style.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./Cart/Cart";
import MyProfile from "./Profile/MyProfile";

function App() {
  let styleobject = {
    backgroundColor: "orange",
    color: "black",
    fontFamily: "cursive",
  };
  const [user, setUser] = useState({ name: "", phone: "" });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/user/:activepage" element={<MyProfile />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      {/* <Layout>

     <h1>Resturant website</h1>
     </Layout> */}
    </div>
  );
}

export default App;
