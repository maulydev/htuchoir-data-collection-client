import choir from "../assets/choirlogo-min.jpeg";
import htu from "../assets/htulogo-min.jpeg";
import hero from "../assets/hero.jpeg";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";

const Splash = () => {
	return (
		<div className="bg-gradient-to-br from-blue-400 to-blue-600 min-h-screen flex flex-col gap-8 justify-center items-center text-slate-100 p-4 [&>*]:select-none">
			<div className="flex gap-4 [&>*]:bg-white [&>*]:p-1 [&>*]:select-none">
				<img
					className="w-16 h-16 rounded"
					src={htu}
					alt="HTU Logo"
				/>
				<img
					className="w-16 h-16 rounded"
					src={choir}
					alt="Choir Logo"
				/>
			</div>
			<h1 className="text-center flex flex-col [&>*]:select-none">
				<span className="welcome text-4xl">Welcome to</span>{" "}
				<span className="font-black text-2xl title">
					HO TECHNICAL UNIVERSITY CHOIR
				</span>
				<span className="welcome text-3xl">page</span>
			</h1>
			<img
				className="rounded-lg w-full max-w-md border-2"
				src={hero}
				alt=""
			/>
			<div className="flex flex-col gap-2 items-center mb-8">
				<Link
					to="/register"
					className="bg-slate-100 border-2 border-slate-100 text-blue-600 font-medium px-10 py-2 mb-2 rounded-full shadow-2xl flex items-center gap-2"
				>
					<IoMdSend className="text-lg" />
					Click to register
				</Link>
				<Link
					to="/contact"
					className="px-8 py-2 border-2 border-blue-200 text-blue-100 rounded-full shadow-lg flex items-center gap-2"
				>
					<MdContactSupport className="text-lg -ml-2" />
					Contact Us
				</Link>
			</div>
		</div>
	);
};

export default Splash;
