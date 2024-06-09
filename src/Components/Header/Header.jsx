import logo from "../../assets/amazon.png"
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

const Header = () =>{
   const[showAll, setShowAll] = useState(false);
   console.log(showAll);
    return (
        <div className="w-full bg-[#131921] flex items-center h-16 gap-4 ">
             <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100"> <img src={logo} className="w-24  "></img>
                 </div>
            <section className="px-2 h-[80%] flex items-center border border-transparent text-white hover:border-white cursor-pointer duration-100"> 
            <FaLocationDot/>
            <p className="text-sm text-white ">Deliver to <span className="text-sm font-semibold   text-white">India</span></p>
            </section>
            <section className="text-white h-10 rounded-md flex flex-grow relative">
                <span onClick={()=>setShowAll(!showAll)} className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-black flex items-center justify-center rounded-tl-md rounded-bl-md">All<span><IoMdArrowDropdown /></span></span>

                { 
                    showAll && (
                        <div>
                            <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-black text-black p-2 flex-col gap-1 z-50">
                                <li className="hover:bg-[#0066C0] cursor-pointer">
                                    All Categories
                                </li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Alexa Skills</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Amazon Devices</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Amazon Fashion</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Amazon Pharmacy</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Appliances</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Apps & Games</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Baby</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Beauty</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Books</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Clothing & Accessories</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Computer & Accessories</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Electronics</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Furniture</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Garden & Outdoors</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Health & Personal Care</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Home</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer"> Kitchen</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Jewellery</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Luggage & Bags</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Music</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Pet Supplies</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Software</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Sports</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Shoes & HandBags </li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Tools & Home Improvement</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Toys & Games</li>
                                <li className="hover:bg-[#0066C0] cursor-pointer">Watches</li>
                                

                            </ul>
                        </div>
                    )
                }
                <input type="text" placeholder="Search Amazon.in" className="h-full text-base text-[#131921] flex flex-grow outline-none border-none px-2"></input>
                <span className="w-12 h-full flex items-center justify-center bg-[#FEBD69] hover:bg-[#F0A647] duration-300 text-black cursor-pointer rounded-tr-md rounded-br-md text-xl"><AiOutlineSearch /></span>
            </section>
            <section className=" px-2 h-[80%]  text-white flex flex-col items-start justify-center border border-transparent hover:border-white cursor-pointer duration-100">
                <p className="text-xs text-slate-400 font-semibold">Hello,sign in</p>
                <p className="text-sm flex font-bold -mt-1">Accounts & List{" "}<span><IoMdArrowDropdown className="text-xl" /></span></p>
            </section>
            <section className=" px-2 h-[80%] flex flex-col item-start justify-center border border-transparent text-white hover:border-white cursor-pointer duration-100 ">
                <p className="text-xs">Returns</p>
                <p className="text-sm -mt-1 font-bold">& Orders</p>
            </section>
            <section className= "  px-3 py-1 h-[60%]   text-white flex items-start justify-center  border border-transparent hover:border-white cursor-pointer duration-100 relative">
            <FaCartShopping />
            <p className="text-xs font-semibold mt-3 ">Cart <span className="absolute text-xs -top-2 left-2 font-semibold p-1 h-4 bg-[#F0A647] flex items-center justify-center rounded-full">0</span></p>
            </section>
        </div>
    )
}

export default Header;