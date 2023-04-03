import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
	let [input, setInput] = useState("")
	let [data, setData] = useState(null);
	const auth = process.env.REACT_APP_PEXELS_AUTH;
	const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
	let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

	const search = async (url) => {
		let result = await axios.get(url, {
			headers: { Authorization: auth },
		});
		setData(result.data.photos);
	};

	useEffect(() => {
		search(initialURL);
	}, []);

	return (
		<div style={{ minHeight: "100vh" }}>
			<Search search={() => {
				search(searchURL)
			}} setInput={setInput}/>
			<div className="pictures">
				{data &&
					data.map((d) => {
						return <Picture key={d.id} data={d} />;
					})}
			</div>
		</div>
	);
};

export default Homepage;
