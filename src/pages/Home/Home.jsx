import Layout from "../../Components/Layout/Layout"
import Banner from "../../Components/Banner/Banner";
import Trending from "../../Components/Trending/Trendiing";
import Products from "../../Components/Products/Products"

const Home = () =>{
    return (
       <Layout>
        <Banner></Banner>
        <Trending></Trending>
        <Products></Products>
       </Layout>

       
    )
}
export default Home;