import choir from "../assets/choirlogo-min.jpeg";
import htu from "../assets/htulogo-min.jpeg";
import { BiShare } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AlertPanel from "../components/AlertPanel";

const Form = () => {
	const [id, setId] = useState("");
	const [alertMsg, setAlertMsg] = useState("");
	const [toggleAlert, setToggleAlert] = useState(false);
	const date = new Date();

	const onclick = () => {
		setToggleAlert(() => false);
	};

	useEffect(() => {
		axios("http://127.0.0.1:8000/id-maker").then((res) =>
			setId(() => res.data["id"])
		);
	}, []);

	const form = useRef();

	const formHandler = (e) => {
		e.preventDefault();

		const formData = form.current;

		axios
			.post(
				"http://127.0.0.1:8000/register/",
				{
					fname: formData.fname.value,
					phone: formData.phone.value,
					lname: formData.lname.value,
					part: formData.part.value,
					department: formData.department.value,
					programme: formData.programme.value,
					level: formData.level.value,
					address: formData.address.value,
					photo: formData.photo.files[0],
					membership_id: formData.membership_id.value,
				},
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			)
			.then((res) => {
				if (res.status == 201) {
					setToggleAlert((e) => (e = true));
					setAlertMsg(() => res.data);
				}
			});

		form.current.reset();
	};

	return (
		<section className="flex flex-col items-center text-slate-100 bg-gradient-to-b from-blue-400 to-blue-600 min-h-screen">
			{toggleAlert && (
				<AlertPanel
					onclick={onclick}
					message={alertMsg}
				/>
			)}
			<div className="flex gap-4 m-4 [&>*]:bg-white [&>*]:p-1 [&>*]:select-none shadow-lg">
				<img
					className="w-10 h-10 rounded"
					src={htu}
					alt="HTU Logo"
				/>
				<img
					className="w-10 h-10 rounded"
					src={choir}
					alt="Choir Logo"
				/>
			</div>
			<div className="flex flex-col text-center select-none">
				<span className="font-bold">WELCOME ON BOARD!</span>
				<span>Please use a minute to fill this form</span>
			</div>
			<section className="mb-8 bg-white mt-4 w-full h-full rounded-t-3xl md:rounded-3xl max-w-md">
				<div className="select-none text-blue-600 p-4 text-center flex flex-col text-2xl md:text-4xl">
					<span className="welcome">Sing! Praises!!</span>
					<span className="welcome">Sing! Sing! Praises to the Lord!</span>
				</div>
				<form
					encType="multipart/form-data"
					onSubmit={formHandler}
					ref={form}
					className="[&>*]:appearance-none [&>*]:py-2 [&>*]:px-4 [&>*]:outline-none text-slate-900 flex flex-col p-4 gap-2"
				>
					<input
						type="text"
						className="rounded-full font-normal border"
						name="membership_id"
						readOnly
						value={
							date.getFullYear().toString().slice(2) +
							(date.getMonth() + 1) +
							"-" +
							id
						}
					/>
					<select
						name="part"
						defaultValue={"default"}
						className="bg-white outline-none px-4 py-2 rounded-full font-normal border"
					>
						<option
							value="default"
							disabled
						>
							Select the part you sing
						</option>
						<option value="treble">Treble/Soprano</option>
						<option value="alto">Alto</option>
						<option value="tenor">Tenor</option>
						<option value="bass">Bass</option>
						<option value="not-set">Unspecified</option>
					</select>
					<input
						type="text"
						className="rounded-full font-normal border"
						placeholder="First Name"
						name="fname"
					/>
					<input
						type="text"
						className="rounded-full font-normal border"
						placeholder="Last Name"
						name="lname"
					/>
					<input
						type="text"
						className="rounded-full font-normal border"
						placeholder="Phone Number"
						name="phone"
					/>
					<input
						type="text"
						className="rounded-full font-normal border"
						placeholder="Department"
						name="department"
					/>
					<input
						type="text"
						className="rounded-full font-normal border"
						placeholder="Level"
						name="level"
					/>
					<input
						type="text"
						className="rounded-full font-normal border"
						placeholder="Programme of study"
						name="programme"
					/>
					<input
						type="text"
						className="rounded-full font-normal border"
						placeholder="Residential Address"
						name="address"
					/>
					<div className="flex flex-col -mx-4">
						<label className="mb-2 ml-4 text-sm text-gray-400">
							Upload Passport Photo
						</label>
						<input
							accept="image/png, image/jpeg, image/jpg"
							type="file"
							className="appearance-none w-full border rounded-full file:bg-slate-200 file:bg-transparent file:border file:border-none file:outline-none file:px-4 file:py-2"
							name="photo"
						/>
					</div>

					<button
						type="submit"
						className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-full text-slate-100"
					>
						Submit
					</button>
					<Link
						to="/"
						className="text-center flex items-center justify-center gap-2"
					>
						<BiShare className="text-xl" /> Go back
					</Link>
				</form>
			</section>
		</section>
	);
};

export default Form;
