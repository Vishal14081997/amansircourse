import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import ProductContext from "./context/ProductContext";

function App() {

  const user = {
    name: "Vishal",
    age: 22
  };
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1500
    }
  ];

  return (
    <>
      <UserContext.Provider value={user}>
        <ProductContext.Provider value={products}>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;