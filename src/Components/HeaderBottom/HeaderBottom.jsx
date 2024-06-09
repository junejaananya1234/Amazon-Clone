import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const HeaderBottom = () =>{
    const[sidebar, setSideBar] = useState(false)

    const data = [

    ]

    return(
        <div className="w-full  h-10 bg-[#232F3E] px-4 text-white flex items-center">
          <ul className="flex items-center justify-center gap-3 font-semibold">
            <li className="flex gap-1 px-2 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">
            <RxHamburgerMenu className="h-7" onClick={()=>setSideBar(true)}/>
            <p className="font-bold">All</p>
            </li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">
                Fresh
            </li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100"> Amazon miniTV</li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">Sell</li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">Best Sellers</li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">Mobiles</li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">Today's Deals</li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">Fashion</li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100">Eletronics</li> 
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100"> Home & Kitchen</li>
            <li className="px-2 py-1 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100"> Customer Service</li>
          </ul>
          {
            sidebar &&(
                <div className="w-full h-screen text-black fixed top-0 left-0 bg-[#232F3E] bg-opacity-50    ">
                 <div className="w-full h-full relative">
                  <div className="w-[350px] h-full bg-white border border-black overflow-x-hidden overflow-y-scroll">
                   <div className="w-full bg-[#232F3E] text-white py-2 px-6 flex items-center gap-3">
                   <RiAccountCircleFill className="text-2xl" />
                   <h3 className="font-semibold">Hello, sign in</h3>
                   </div>
                   <div>
                  <h3 className="text-lg font-semibold mb-1 px-6">Trending</h3>
                  <ul className="border-b border-gray-300">
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Best Sellers</li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">New Releases</li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Movers and Shakers</li>
                 </ul>
                 <h3 className="text-lg font-semibold mb-1 px-6">Digital Content and Devices</h3>
                  <ul className="border-b border-gray-300">
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Echo & Alexa <span><IoIosArrowForward /></span></li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Fire TV<span><IoIosArrowForward /></span></li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Kindle E-Readers & eBooks<span><IoIosArrowForward /></span></li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Audible AudioBooks<span><IoIosArrowForward /></span></li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Amazon Prime Music<span><IoIosArrowForward /></span></li>
                 </ul>
                 <h3 className="text-lg font-semibold mb-1 px-6">Programs & Features</h3>
                  <ul className="border-b border-gray-300">
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Amazon Pay</li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Gift Cards & Mobile<span><IoIosArrowForward /></span></li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Kindle E-Readers & eBooks<span><IoIosArrowForward /></span></li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Amazon LaunchPad</li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Amazon Business</li>
                 </ul>
                 <h3 className="text-lg font-semibold mb-1 px-6">Help and Settings</h3>
                  <ul className="border-b border-gray-300">
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Your Account</li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Customer Service</li>
                <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">Sign in</li>
            
                 </ul>

                 </div>
                
                  </div>
                  <span className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white" onClick={()=>setSideBar(false)}><RxCross2 /></span>
                 </div>

                </div>

            )
          }
        </div>
    )
}

export default HeaderBottom;