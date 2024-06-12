import { useContext } from "react"
import { SearchContext } from "../../Context/Data/SearchContext"
const AllProducts = ()=>{
  const {searchResults, searchQuery} = useContext(SearchContext);
  return(
    <div>
        <h1>Search result of "{searchQuery}"</h1>
        <div>
            {
                searchResults.map((product, index) => (
                    <div key={index} className="product-item">
                        <img src={product.product_photo} alt={product.product_title} />
                        <h2>{product.product_title}</h2>
                        <p>{product.product_price}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}