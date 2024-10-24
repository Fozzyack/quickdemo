import React from "react";
import SKG from "../assets/skg.png";
import PRC from "../assets/PRC.png";
import WR from "../assets/WR.jpg";
import ENVISION from "../assets/Envision.jpg";
import IMED from "../assets/IMED.png";
import PRECISION from "../assets/Precision.jpg"
import GCR from "../assets/GCR.jpg"
import CAPITAL from "../assets/Capital.jpg"
import MQH from "../assets/MQH.jpg"
import QSCAN from "../assets/QSCAN.png"
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
		name: "I-MED Radiology",
		link: "https://portal.i-medonline.com.au/",
		image: IMED 
	},
	{
		name: "Envision",
		link: "https://patient.envisionmi.com.au/sign-in?ReturnUrl=%2f",
		image: ENVISION,
	},
	{
		name: "Precision Radiology",
		link: "https://precisionradiologywa.com.au/",
		image: PRECISION, 
	},
	{
		name: "GoldCoast Radiology",
		link: "https://iconnect.gcradiology.com.au/login/",
		image: GCR, 
	},
	{
		name: "Captial Radiology",
		link: "https://connect.capitalradiology.com.au/Portal/app#/#",
		image: CAPITAL, 
	},
	{
		name: "MQ Health",
		link: "https://aumuh.patientportal.intelerad.com/login",
		image: MQH 
	},
	{
		name: "Q Scan",
		link: "https://patient.qscan.com.au/sign-in?ReturnUrl=%2f",
		image: QSCAN
	},
];

const Links = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 mt-8 gap-7 p-4 rounded-xl justify-center">
			{LINKS.map((link, index) => (
				<motion.div
					initial={{ y: -2000 }}
					animate={{ y: 0 }}
					transition={{ delay: (index + 1) * 0.2, type: "spring", stiffness: 20 }}
				>
					<a href={link.link} >
						<motion.div 
                        
                        whileHover={{ y:-10 }}
                        className="p-4 bg-white justify-self-center flex flex-col hover:shadow-xl hover:bg-gradient-to-tr hover:from-sky-300 hover:to-lime-100 duration-150 transition-all ease-in-out items-center justify-center rounded-xl hover:border-white h-full group">
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
