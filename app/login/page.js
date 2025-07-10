"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [error, seterror] = useState("")
const router = useRouter()
const handelSubnit = async (e) => {
  e.preventDefault()

  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,  // Ensure this is false
    callbackUrl: "",
  })

  console.log("Sign-in response:", res); // Debug response

  if (res?.error) {
    seterror("Invalid email or password")
  } else {
    setTimeout(() => {
      router.replace("/")
    }, 2000)
  }
}

  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-cyan-300 to-purple-800">
        <div className=" flex flex-col gap-1.5 items-center shadow-2xl shadow-black bg-amber-50 h-[470px] w-[400px] rounded-3xl py-3">
          <h1 className="text-center font-bold text-4xl text-gray-600 mt-2">
          Easy login
          </h1>
          <form onSubmit={handelSubnit} className="flex flex-col gap-7 mt-5 w-[350px]">
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              className="text-gray-600 py-2.5 text-xl shadow-xl shadow-gray-400 px-7 rounded-2xl bg-gray-200"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="text-gray-600 py-2.5 text-xl shadow-xl shadow-gray-400 px-7 rounded-2xl bg-gray-200"
              type="text"
              placeholder="Password"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-700 shadow-2xl shadow-black py-2.5 text-xl text-white rounded-2xl cursor-pointer">
            Login
            </button>
          </form>
          <div className="flex justify-center items-center mt-1 gap-1">
            <div className="w-[155px] h-[1px] bg-gray-500 mt-1.5"></div>
            <h2 className="text-lg text-gray-600">or</h2>
            <div className="w-[155px] h-[1px] bg-gray-500 mt-1.5"></div>
          </div>
          <div className="w-[350px] my-5">
          <button onClick={()=>{alert("This feature is not available right now")}} className="shadow-2xl flex justify-center items-center shadow-black py-1 text-xl w-full text-white rounded-2xl cursor-pointer">
              <img className="h-[45px] w-[45px]" src="/google.webp" alt=""/><span className="text-black">oogle</span>
            </button>
          </div>
          <p>Not an acount?<Link className="underline" href="/signup">sign up</Link></p>
        </div>
        {error && <div className="text-white bg-red-500  text-center tems-center shadow-2xl shadow-black rounded-3xl py-3 px-6 w-[400px] text-lg mt-7">{error}</div>}
      </section>
    </>
  );
};

export default Login;
