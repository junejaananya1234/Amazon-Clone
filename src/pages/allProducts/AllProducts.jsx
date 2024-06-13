import { useContext } from "react"
import { SearchContext } from "../../Context/Data/SearchContext"
import Layout from "../../Components/Layout/Layout";
const AllProducts = ()=>{
  const {searchResults, searchQuery} = useContext(SearchContext);
  return(
    <Layout>
<div>
    <h1 className="text-4xl font-bold mb-4 p-4">Results</h1>
    <div>
        {
            searchResults.map((product, index) => (
                <div key={index} className="flex items-start mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <img src={product.product_photo} alt={product.product_title} className="w-48 h-48 object-contain mr-4" />
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold text-gray-800 hover:text-yellow-700">{product.product_title}</h2>
                        <p className="text-gray-600">Rating: {product.product_star_rating}</p>
                        <p className="text-gray-600">Price: {product.product_price}</p>
                        <p className="text-gray-600">No Cost EMI available on selected cards</p>
                        <p className="text-gray-600"><span className="font-bold">{product.delivery}</span></p>
                        <button className="outline-none bg-yellow-500 rounded-full p-1 mt-2  w-24 text-sm hover:bg-yellow-600">Add to cart</button>
                    </div>
                </div>
            ))
        }
    </div>
</div>



    </Layout>
  )
}

export default AllProducts;