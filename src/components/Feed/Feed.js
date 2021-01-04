import React from 'react';

import './Feed.css';

export default function Feed(props) {
	return (
		<div className="Feed">
			<div>
				작성자 : {props.owner}
			</div>
			<div>
				내용 : {props.content}
			</div>
		</div>
	);
}