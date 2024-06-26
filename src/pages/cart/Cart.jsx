import Layout from "../../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { deleteItem,incrementQuantity,decrementQuantity } from "../../redux/amazonSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.amazonReducer.products);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    let Total = 0;
    products.forEach((item) => {
      Total += item.price * item.quantity;
    });
    setTotalPrice(Total.toFixed(2));
    
  }, [products]);

  // const [name, setName] = useState("")
  // const [address, setAddress] = useState("");
  // const [pincode, setPincode] = useState("")
  // const [phoneNumber, setPhoneNumber] = useState("")

  // const buyNow = async ()=>{
  //   if (name === "" || address == "" || pincode == "" || phoneNumber == ""){
  //     return toast.error("All fields are required",{
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     })
  //   }
  //   const addressInfo = {
  //     name,
  //     address,
  //     pincode,
  //     phoneNumber,
  //     date: new Date().toLocaleString(
  //       "en-US",
  //       {
  //         month: "short",
  //         day: "2-digit",
  //         year: "numeric",
  //       }
  //     )
  //   }
  // }

  return (
    <Layout>
      <div className="w-full bg-gray-100 p-4">
        <div className="container mx-auto h-96 grid grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className="font-titlefont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-3xl font-semibold">Shopping Cart</h2>
              <h4 className="text-xl">SubTotal</h4>
            </div>
            {/* product listing */}
            <div>
              {products.map((item, i) => (
                <div key={i} className="w-full border-b-[1px] border-b-gray-300 p-4 flex item-center gap-10">
                  <div className="w-1/5">
                    <img src={item.image} alt="product" className="w-full h-44 object-contain" />
                  </div>
                  <div>
                    <h2 className="text-left">{item.title}</h2>
                    <p>Unit Price: <span className="font-semibold">${item.price}</span></p>
                    <div className="bg-[#F0F2F2] flex justify-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                      <p>Qty:</p>
                      <p onClick={()=>dispatch(decrementQuantity(item.id))} className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">-</p>
                      <p>{item.quantity}</p>
                      <p  onClick={()=>dispatch(incrementQuantity(item.id))}className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">+</p>
                    </div>
                    <button onClick={()=>dispatch(deleteItem(item.id))} className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">Delete Item</button>
                  </div>
                  <div className="text-lg font-semibold">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
              <div>
                <button className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">Clear Cart</button>
              </div>
            </div>
          </div>
          
          <div className="w-full h-52 bg-white col-span-1 flex items-center p-4 flex-col justify-center">
            <p className="flex gap-2 items-start text-sm">
              <span>
                <FaRegCircleCheck className="text-green-500" />
              </span>
              Your order qualifies for FREE Shipping. Choose this option at checkout. See details...
            </p>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center justify-between">Total:<span className="text-lg font-bold">${totalPrice}</span></p>
            </div>
            <button className="w-full font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow border-yellow-500 py-1 rounded-md">Proceed To Pay</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
