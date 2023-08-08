
import React,{useState} from 'react'
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try{
      const response=await fetch("http://localhost:3000/users")
      const data= await response.json()
      const user=data.find((user)=>user.email===email)
      if(user){
        const resetResponse=await
        fetch(`http://localhost:3000/users/${user.id}`)
        const resetData=await
        resetResponse.json()
        console.log(resetData)
        if(resetResponse.ok){
          setMessage(resetData.message)
          setEmail("")
          setPassword("")

        }else{
          setMessage("Reset failed ,try again")
        }
      
      }else{
        setMessage("User not found,try again")
      }

    }catch(error){
      console.error("Error:","error")
      setMessage("An error occurred")
    }
  }

  return(
    <div className="flex items-center justify-center min-h-screen">
      
    <form
      onSubmit={handleResetPassword}
      className="border w-96 rounded-lg shadow-lg p-4 flex flex-col gap-4"
    >
      <h1 className="text-center text-2xl text-rose-600">Reset Password</h1>
      <h3>Enter Email</h3>
      <div>
        <input
          type="email"
          name="email"
          placeholder='Enter your email'
          className="border rounded-lg w-full p-3"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
     
      <div>
        <input
          type="password"
          name='password'
          placeholder='Enter new password'
          className="border rounded-lg w-full p-3"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
     <div> <input
        type="submit"
        value='Reset password'
        className="bg-rose-600 rounded-lg w-48 p-3 mt-2 text-white hover:opacity-80 m-auto"
      /></div>
     
     {message && <p>{message}</p>}
      <Link to='/signin'>Back To Login</Link>
      </form>
     
      </div>)}
    