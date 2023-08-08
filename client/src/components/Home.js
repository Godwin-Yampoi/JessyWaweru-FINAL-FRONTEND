import React,{useState,useEffect} from "react";
import Highlights from "./Highlights";
import { Link } from "react-router-dom";
import ProductsHome from "./ProductsHome";
import { useAuthContext } from "../providers/Auth.provider";

function Home() {
  const auth = useAuthContext();
  const isAuth = auth?.user;
  const [isAdmin,setIsAdmin]=useState(false)


  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    if(user && user.admin===true){
      setIsAdmin(true)
    }
  },[])
  return (
    <div>
      <div className="h-screen">
        <div className="relative h-[98%] flex items-center w-full justify-end pr-40 bg-[url(https://images.unsplash.com/photo-1570876050997-2fdefb00c004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-cover">
          <video autoPlay muted loop className="h-5/6">
            <source
              src="https://player.vimeo.com/video/195975354?h=dee66404ac"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text-white text-xl flex flex-col pl-40 justify-center gap-6 absolute top-20 bg-white/30 h-full w-full">
          {isAdmin &&(
          <>
          <h4  className="text-6xl font-semibold uppercase"> HELLO,
            <span className="text-rose-600">ADMIN!</span></h4>
            <h12 className="text-6xl font-semibold uppercase">WELCOME TO <br /><span className="text-rose-600">SHOPCRAWL</span></h12>
            
            <h8 className="text-2xl font-semibold uppercase"> <span className="text-rose-600">##</span>Fine tune the <span className="underline">Database</span> </h8>
            <h8 className="text-2xl font-semibold uppercase"><span className="text-rose-600">##</span>With <span className="underline">Update</span> and <span className="underline">Delete</span> features</h8>
          
            </>)}
          
          </div>

        <div className="text-white text-xl flex flex-col pl-40 justify-center gap-6 absolute top-20 bg-white/30 h-full w-full">
          {!isAdmin &&(
            <>
<h1 className="text-6xl font-semibold uppercase">
            Welcome to<br />
            <span className="text-rose-600">SHOPCRAWL</span>
          </h1>
          <p>
            Discover dynamic ways to view your online shopping experience
            <br />compare stores
             <br />
           SHOPCRAWL has got you covered
          </p>
            
        
          
          {!isAuth ? (
            <Link to="/signIn">
              <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
                Get started <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </Link>
          ) : (
            <Link to="/products">
              <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
                <i className="fa-solid fa-calendar-days mr-2"></i>See all Products
                <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </Link>
          )}
            </>)} 
        </div> 
       
      </div> 
      <Highlights />
      <ProductsHome />
    </div>
  );
}

export default Home;
