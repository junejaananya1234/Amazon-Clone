import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  

  const getData = async () => {
    const options = {
      method: 'GET',
      url: 'https://real-time-amazon-data.p.rapidapi.com/deals-v2',
      params: {
        country: 'US',
        min_product_star_rating: 'ALL',
        price_range: 'ALL',
        discount_range: 'ALL'
      },
      headers: {
              'x-rapidapi-key': '0564b7a072msh0b34f2a496006e4p175005jsn026dc2112d4c',
        
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data.deals);
      setDisplay(response.data.data.deals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      deal_id: item.deal_id,
      title: item.deal_title,
      price: item.list_price.amount,
      quantity: 1,
      image:item.deal_photo,
    })
     
  );
 
    
  };

  return (
    <div>
      <h2 className="text-4xl font-titleFont font-semibold mb-6 text-center">Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {display.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl">
            <img src={item.deal_photo} alt={item.deal_title} className="w-full h-36 object-contain" /> 
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-center text-gray-900">{item.deal_title}</h3>
              <p className="text-gray-700 mb-4 text-center">${item.list_price.amount}</p>
              <div className="flex justify-center">
                <button 
                  
                  onClick={() => handleAddToCart(item)}
                  className="bg-yellow-500 text-white rounded-full px-4 py-2 transition-colors duration-300 hover:bg-yellow-600 focus:outline-none"
                >
                    
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
