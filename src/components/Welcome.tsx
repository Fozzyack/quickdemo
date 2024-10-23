import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
	return (
		<div className="flex flex-col gap-4 justify-center items-center">
			<a href="https://www.youtube.com/watch?v=h9uFQv3t1AU">
				<motion.div
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					whileHover={{ y: -10 }}
					className="p-1 bg-transparent hover:bg-lime-100 rounded-xl hover:shadow-xl transition-all ease-in-out duration-150"
				>
					<div className="font-bold text-lime-700 flex p-4 bg-white rounded-xl">
						Welcome
					</div>
				</motion.div>
			</a>
			<a href="https://www.youtube.com/watch?v=h9uFQv3t1AU">
				<motion.div
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					whileHover={{ y: -10 }}
					className="p-1"
				>
					<div className="text-lime-700 hover:border-lime-100 hover:border-4 lex p-4 bg-white rounded-xl transition-all ease-in-out hover:shadow-xl">
						Important links for Radiology IT Techs.
					</div>
				</motion.div>
			</a>
		</div>
	);
};

export default Welcome;
