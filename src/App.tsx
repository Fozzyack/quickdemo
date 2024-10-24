import React from "react";
import Links from "./components/Links";
import Welcome from "./components/Welcome";

function App() {
	return (
		<div className="bg-gradient-to-br from-lime-200 to-70% to-sky-300 flex flex-col justify-center items-center min-h-screen pt-8 md:pt-0">
			<Welcome />
            <Links />
		</div>
	);
}

export default App;
