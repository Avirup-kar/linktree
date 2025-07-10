"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';

const Login = () => {
  const router = useRouter()
  const usehParams = useSearchParams()
const [username, setusername] = useState(usehParams.get('signup'))
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [error, seterror] = useState("")

 const handelsibmit  = async (e) => {
   e.preventDefault()

   const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

if(!username || !email || !password){
  seterror("Please fill all fields")
  return
}

const raw = JSON.stringify({
  "username": username,
  "email": email,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const res = await fetch("api/login", requestOptions)
const result2 = await res.json() 
 if(result2.error === "true"){
  seterror(result2.message)
 }
 else{
  router.push(`/login?email=${email}`)
 }
 }

  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-cyan-300 to-purple-800">
        <div className=" flex flex-col gap-1.5 items-center shadow-2xl shadow-black bg-amber-50 h-[540px] w-[400px] rounded-3xl py-3">
          <h1 className="text-center font-bold text-4xl text-gray-600 mt-2">
            Sign up
          </h1>
          <form onSubmit={handelsibmit} className="flex flex-col gap-7 mt-5 w-[350px]">
            <input
            onChange={(e) => setusername(e.target.value.replace(/\s/g, ""))}
              value={username? username.toLowerCase() : ""}
              className="text-gray-900 py-2.5 text-xl shadow-xl shadow-gray-400 px-7 rounded-2xl bg-gray-200"
              type="text"
              placeholder="Username"
            />
            <input
            onChange={(e) => setemail(e.target.value)}
            value={email}
              className="text-gray-900 py-2.5 text-xl shadow-xl shadow-gray-400 px-7 rounded-2xl bg-gray-200"
              type="email"
              placeholder="Email"
            />
            <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
              className="text-gray-900 py-2.5 text-xl shadow-xl shadow-gray-400 px-7 rounded-2xl bg-gray-200"
              type="text"
              placeholder="Password"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-700 shadow-2xl shadow-black py-2.5 text-xl text-white rounded-2xl cursor-pointer">
              Sign up
            </button>
          </form>
          <div className="flex justify-center items-center mt-1 gap-1">
            <div className="w-[155px] h-[1px] bg-gray-500 mt-1.5"></div>
            <h2 className="text-lg text-gray-600">or</h2>
            <div className="w-[155px] h-[1px] bg-gray-500 mt-1.5"></div>
          </div>
          <div className="w-[350px] my-5">
          <button onClick={()=>{alert("This feature is not available right now filout the top details")}} className="shadow-2xl  text-black flex justify-center items-center shadow-black py-1 text-xl w-full text-white rounded-2xl cursor-pointer">
              <img className="h-[45px] w-[45px]" src="/google.webp" alt=""/><span className="text-black">oogle</span>
            </button>
          </div>
          <p>have an acount?<Link className="underline" href="/login">Login</Link></p>
        </div>
      {error && <div className="text-white bg-red-500 text-center shadow-2xl shadow-black rounded-3xl py-3 px-6 w-[400px] text-lg mt-7">{error}</div>}
      </section>
    </>
  );
};

export default Login;
