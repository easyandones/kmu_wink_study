import React from 'react';

import './Weather.css';

export default function Weather(props) {
	return (
		<div className="Weather">
			<div>
				도시 : {props.weather.name}
			</div>
			<div>
				날씨 : {props.weather.weather}
			</div>
			<div>
				설명 : {props.weather.description}
			</div>
			<img src={props.weather.icon}/>
		</div>
	);
}