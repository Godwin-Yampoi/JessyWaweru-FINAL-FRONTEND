import React, { useState } from "react";
//import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpAdmin() {
  //const [csrfToken, setCsrfToken] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [admin,setAdmin]=useState("")
  const [isLoading, setisLoading] = useState(false);

  /*useEffect(() => {
    fetchCsrfToken();
  }, []);

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch("/api/csrf-token");
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error("Failed to fetch CSRF token:", error);
    }
  };*/
  

  function handleFormSubmit(e) {
    e.preventDefault();
    setisLoading(true);

    const userDetails = {
      username: username,
      email: email,
      password: password,
      age: age,
      gender: gender,
      admin:admin
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001",
        //"X-CSRF-Token": csrfToken
      },
      body: JSON.stringify(userDetails),
      //credentials: "include",
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/products";
    })
    .catch((error) => {
      toast.error(error.message);
      setisLoading(false);
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer />

      <form
        onSubmit={handleFormSubmit}
        className="border w-96 rounded-lg shadow-lg p-4 flex flex-col gap-4"
      >
        <h1 className="text-center text-2xl text-rose-600">Sign Up Here</h1>
        <h3 className="">Username</h3>
        <div>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border rounded-lg w-full p-3"
            required
          />
        </div>
        <h3>Email</h3>
        <div>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border rounded-lg w-full p-3"
            required
          />
        </div>
        <h4>Password</h4>
        <div>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border rounded-lg w-full p-3"
            required
          />
        </div>
        <h4>Age</h4>
        <div>
          <input
            onChange={(event) => setAge(event.target.value)}
            value={age}
            type="number"
            min="0"
            max="100"
            className="border rounded-lg w-full p-3"
            required
          />
        </div>
        <div>
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            id="gender"
            name="gender"
            className="border rounded-lg w-full p-3"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="rather not say">Rather not say</option>
          </select>
        </div>
        <h3 className="">ADMIN PASSCODE</h3>
        <p></p>
        <div>
          <input
            type="text"
            value={admin}
            onChange={(event) => setAdmin(event.target.value)}
            className={`border rounded-lg w-full p-3 text-black text-opacity-0 hover:text-opacity-100`}
          
          />
        
        </div>
        <button
          type="submit"
          className="bg-rose-600 rounded-lg w-48 p-3 mt-2 text-white hover:opacity-80 m-auto"
        >
          {!isLoading ? (
            "Sign up"
          ) : (
            <div>
              <i className="fa-solid fa-spinner animate-spin mr-2"></i>
              Loading...
            </div>
          )}
        </button>
        <p className="mt-2 text-center text-neutral-800 dark:text-neutral-200">
          Already have an account?
          <br />{" "}
          <Link
            to="/signIn"
            className="text-rose-600 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}