import Footer from "@/containers/Footer";
import Navbar from "@/containers/Navbar";
import AddProduct from "@/containers/dashboard/AddProduct";
import Home from "@/containers/dashboard/Home";
import ProductDesc from "@/containers/dashboard/ProductDesc";

const page = () => {
	return <>
	<Navbar/>
		{/* <Home/> */}
		{/* <ProductDesc/> */}
		<AddProduct/>
<Footer/>
	</>;
};

export default page;
