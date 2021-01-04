import React from 'react';

import './Textarea.css';

function Textarea(props) {
	return <textarea className="Textarea" name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value}>{props.defaultValue}</textarea>;
}

export default Textarea;