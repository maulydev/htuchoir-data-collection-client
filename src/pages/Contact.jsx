import { BiShare } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<section
			className="bg-gradient-to-br from-blue-400 to-blue-600 min-h-screen flex flex-col items-center gap-4 px-4 py-8 text-slate-100"
		>
			<h1 className="text-center flex flex-col [&>*]:select-none">
				<span className="welcome text-4xl">Welcome to</span>{" "}
				<span className="font-black text-2xl title">
					HO TECHNICAL UNIVERSITY CHOIR
				</span>
			</h1>
			<section className="space-y-2 bg-slate-100 text-slate-600 w-full rounded-3xl p-4 max-w-md shadow-lg mt-4">
				<h6 className="font-bold border-b border-slate-300 pb-2">Contact Us</h6>
				<ul className="[&>*]:flex [&>*]:flex-col space-y-4">
					<li>
						<span className="font-bold">Music Director</span>
						<span>Mr. Adzimah Constance</span>
						<span>02450785871</span>
					</li>
					<li>
						<span className="font-bold">Choir President:</span>
						<span>Miss Sidza Enyonam Evelyn</span>
						<span>0249150005/0249222474</span>
					</li>
				</ul>
			</section>
			<Link
				to="/"
				className="text-center flex items-center justify-center gap-2 px-4 py-2"
			>
				<BiShare className="text-xl" /> Go back
			</Link>
		</section>
	);
};

export default Contact;
