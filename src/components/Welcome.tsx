import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
	return (
        <a href="https://www.youtube.com/watch?v=h9uFQv3t1AU">
		<motion.div
			initial={{ y: -100 }}
			animate={{ y: 0 }}
            whileHover={{ y: -10 }}
			className="p-1 bg-pink-400 bg-gradient-to-tr from-red-500 to-blue-500 rounded-xl hover:shadow-xl transition-all ease-in-out duration-150"
		>
                <div className="text-white iflex p-4 bg-black rounded-xl">Welcome</div>
		</motion.div>
        </a>
	);
};

export default Welcome;
