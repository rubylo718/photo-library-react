import React from "react";

const Picture = ({ data }) => {
	return (
		<div className="picture">
			<p>Photo by {data.photographer}</p>
			<div className="imageContainer">
				<img src={data.src.large} alt="" />
			</div>
			<p>
				<a target="_blank" href={data.src.large} rel="noreferrer">
					Download Picture
				</a>
			</p>
		</div>
	);
};

export default Picture;
