import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root></Root>,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home></Home>,
				},
				{
					path: "/about",
					element: <About></About>,
				},
				{
					path: "/services",
					element: <Services></Services>,
				},
				{
					path: "/blog",
					element: <Blog></Blog>,
				},
				{
					path: "/contact",
					element: <Contact></Contact>,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
