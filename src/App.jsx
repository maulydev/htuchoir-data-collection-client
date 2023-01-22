import "@fontsource/poppins";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Splash from "./pages/Splash";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className="text-slate-900">
			<BrowserRouter>
				<Routes
					location={location}
					key={location.pathname}
				>
					<Route
						path="/"
						element={<Splash />}
					/>
					<Route
						path="/register"
						element={<Form />}
					/>
					<Route
						path="/Contact"
						element={<Contact />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
