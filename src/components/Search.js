import React, { useState } from "react";
import axios from "axios";

const Search = () => {
	let [data, setData] = useState(null)
	const auth = process.env.REACT_APP_PEXELS_AUTH;
	const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

	const search = async () => {
		let result = await axios.get(initialURL, {
			headers: { Authorization: auth },
		});
		setData(result.data.photos)
	};

	return (
		<div className="search">
			<input className="input" type="text" />
			<button onClick={search}>Search</button>
		</div>
	);
};

export default Search;
