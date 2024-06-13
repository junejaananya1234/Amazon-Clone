import Layout from "../../Components/Layout/Layout";
import { useSelector } from "react-redux";
import { FaRegCircleCheck } from "react-icons/fa6";

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);

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
                      <p className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">-</p>
                      <p>{item.quantity}</p>
                      <p className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">+</p>
                    </div>
                    <button className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">Delete Item</button>
                  </div>
                  <div className="text-lg font-semibold">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full h-52 bg-white col-span-1 p-4 flex items-center p-4">
            <p className="flex gap-2 items-start text-sm">
              <span>
                <FaRegCircleCheck className="text-green-500" />
              </span>
              Your order qualifies for FREE Shipping. Choose this option at checkout. See details...
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
