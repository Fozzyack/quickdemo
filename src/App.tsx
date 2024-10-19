import React from "react";
import Links from "./components/Links";
import Welcome from "./components/Welcome";

function App() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<Welcome />
            <Links />
		</div>
	);
}

export default App;
