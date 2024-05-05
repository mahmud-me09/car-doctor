import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../pages/Home";
import Error from "../pages/Error";

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
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
