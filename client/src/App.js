
import ProductsList from "./components/ProductsList";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import SignUpAdmin from "./components/signUpAdmin";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProductsHome from "./components/ProductsHome"
import Cart from "./components/Cart"
import AuthProvider from "./providers/Auth.provider";
import { CartProvider } from "./components/CartProvider";
import UpdateProduct from "./components/updateProduct";
import ResetPassword from "./components/reset";
const SecureRoute = (Component) => {
  return (
    <AuthProvider required={true}>
      <Navbar />
      <Component />
    </AuthProvider>
  );
};

const BaseRoute = (Component) => {
  return (
    <AuthProvider required={false}>
      <Navbar />
      <Component />
    </AuthProvider>
  );
};
function App() {
  return (
   
    <BrowserRouter>
     <CartProvider>
      <Routes>
        <Route path="/" element={BaseRoute(Home)}></Route>
        <Route path="/signIn" element={BaseRoute(SignIn)}></Route>
        <Route path="/signUp" element={BaseRoute(SignUp)}></Route>
        <Route path="/signUpAdmin" element={BaseRoute(SignUpAdmin)}></Route>
        <Route
          path="/ProductDetails/:id"
          element={BaseRoute(ProductDetails)}
        ></Route>
        <Route path="/products" element={BaseRoute(ProductsList)}></Route>
        <Route path="/ProductsHome" element={BaseRoute(ProductsHome)}></Route>
        <Route path="/reset" element={BaseRoute(ResetPassword)}></Route>
        <Route path="/ProductsList" element={BaseRoute(ProductsList)}></Route>
        <Route path='/cart' element={SecureRoute(Cart)}/>
        <Route
          path="/updateProduct/:id"
          element={SecureRoute(UpdateProduct)}
        ></Route>
      </Routes>
      <Footer />
      </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;