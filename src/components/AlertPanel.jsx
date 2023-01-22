import { GrFormClose } from "react-icons/gr";

const AlertPanel = ({ message, onclick }) => {
	return (
		<div
			className={`bg-green-500 py-2 text-white text-center w-full shadow-2xl fixed inset-x-0 flex items-center justify-between px-4`}
		>
			{message}
			<GrFormClose onClick={onclick}  className="text-lg text-whit" />{" "}
		</div>
	);
};

export default AlertPanel;
