import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import HeaderBottom from "../HeaderBottom/HeaderBottom";
const Layout = ({children}) =>{
    return(
        <div>
        <Header></Header>
        <HeaderBottom></HeaderBottom>
        
        <div className="content">{children}</div>
        <Footer></Footer>
        </div>
    )
}
export default Layout;