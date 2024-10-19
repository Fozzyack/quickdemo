import React from "react";
import SKG from "../assets/skg.png";
import PRC from "../assets/PRC.png";
import WR from "../assets/WR.jpg";
import { motion } from "framer-motion";

const LINKS = [
	{
		name: "SKG",
		link: "https://skgconnect.com.au/Portal/app#/",
		image: SKG,
	},
	{
		name: "Perth Radiology Clinic",
		link: "https://app.prcdirect.com.au/",
		image: PRC,
	},
	{
		name: "Western Radiology",
		link: "https://pacs.westernradiology.com.au/Portal/app#/",
		image: WR,
	},
	{
		name: "Another Site",
		link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		image: "",
	},
	{
		name: "Another Site",
		link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		image: "",
	},
	{
		name: "Another Site",
		link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		image: "",
	},
];

const Links = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 mt-8 gap-7 p-4 rounded-xl">
			{LINKS.map((link, index) => (
				<motion.div
					initial={{ y: -2000 }}
					animate={{ y: 0 }}
					transition={{ delay: (index + 1) * 0.2 }}
				>
					<a href={link.link} >
						<motion.div 
                        
                        whileHover={{ y:-10 }}
                        className="p-4 flex flex-col hover:shadow-xl hover:bg-blue-500 duration-150 transition-all ease-in-out items-center justify-center rounded-xl border-black border-2 hover:border-white h-full group">
							<img

								src={link.image}
								alt="Another Site"
								width={100}
								height={100}
								className="bg-white p-2 rounded-xl text-black group-hover:shadow-xl group-hover:-translate-y-2 ease-in-out duration-150"
							/>
							<p className="group-hover:text-white">{link.name}</p>
						</motion.div>
					</a>
				</motion.div>
			))}
		</div>
	);
};

export default Links;
