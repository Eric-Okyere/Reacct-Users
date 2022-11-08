import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import ProtectedRoute from "./component/ProtectedRouts";
import Face from "./pages/Face";

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
				path="/home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
                <Route path="/" element={<Face />} />  
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
				
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;