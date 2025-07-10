"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
 const [text, settext] = useState("")
 const router = useRouter()
  const creatTree = () => {
    router.push(`/signup?signup=${text.toLowerCase()}`)
  }
  
  return (
  <>
     <Navbar/>
     <section className='bg-[#224918] h-[130vh] grid grid-cols-2'>
     <div className="flex flex-col gap-1.5 justify-center ml-[6.5vw] mt-36">
     <div>
     <p className="text-7xl font-bold text-[#d2e823]">Everything you are.</p>
     <p className="text-6xl font-bold text-[#d2e823]">In one, simple link in</p>
     <p className="text-6xl font-bold text-[#d2e823]">bio.</p>
     </div>
     <p className="text-[#d2e823]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
     {!session && <div className="flex gap-2 my-10">
      <input value={text} onChange={(e)=>settext(e.target.value.replace(/\s/g, ""))} className="bg-white focus:outline-green-800 text-gray-800 py-4 px-7 text-lg rounded-lg" placeholder="Enter your username" type="text"/>
      <button onClick={()=>creatTree()} className="bg-pink-200 py-4 px-7 text-lg text-black rounded-full cursor-pointer">Claim your Linktree</button>
     </div>}
     </div>

     <div className="flex flex-col justify-center items-center mr-[6.5vw]">
     <Image className="w-[500px] h-[550px] mt-33" width={200} height={400} src="/bodypic.png" alt="" />
     </div>
     </section>

     <section className='bg-pink-300 h-[130vh] grid grid-cols-2'>
     <div className="flex flex-col justify-center items-center ml-[6.5vw]">
     <Image className="w-[500px] h-[550px] mt-33" width={200} height={400} src="/bodypic2.png" alt="" />
     </div>

     <div className="flex flex-col gap-1.5 justify-center mr-[6.5vw] mt-36">
     <div>
     <p className="text-7xl font-bold text-purple-900">Create and customize</p>
     <p className="text-7xl font-bold text-purple-900">your Linktree in</p>
     <p className="text-7xl font-bold text-purple-900">minutes</p>
     </div>
     <p className="text-purple-900">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
     {!session && <div className="flex gap-2 my-10">
      <button onClick={()=>creatTree()} className="bg-violet-900 py-4 px-7 text-lg text-white rounded-full cursor-pointer">Get started for free</button>
     </div>}
     </div>
     </section>
  </>
  );
}
