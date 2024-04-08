import Footer from "@/containers/Footer";
import Navbar from "@/containers/Navbar";
import AddProduct from "@/containers/dashboard/AddProduct";
import ContactPage from "@/containers/dashboard/ContactPage";
import Home from "@/containers/dashboard/Home";
import ProductDesc from "@/containers/dashboard/ProductDesc";
import ProfilePage from "@/containers/dashboard/ProfilePage";

const page = () => {
	return <>
	<Navbar/>
		{/* <Home/> */}
		{/* <ProductDesc/> */}
		{/* <AddProduct/> */}
		{/* <ProfilePage/> */}
		<ContactPage/>
<Footer/>
	</>;
};

export default page;
