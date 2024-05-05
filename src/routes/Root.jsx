import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Root = () => {
	return (
		<HelmetProvider>
			<div className="max-w-[1320px] mx-auto">
				<NavBar></NavBar>
				<Outlet></Outlet>

				<ToastContainer />
			</div>
			<div className="p-20 bg-black text-white">
				<Footer></Footer>
			</div>
		</HelmetProvider>
	);
};

export default Root;
