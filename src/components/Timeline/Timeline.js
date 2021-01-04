import React from 'react';

import './Timeline.css';

import Feed from '../Feed/Feed.js';

export default function Timeline(props) {
	return (
		<div className="Timeline">
			{props.feeds.map((feed, index) => <Feed owner={feed.owner} content={feed.content} key={index}/>)}
		</div>
	);
}