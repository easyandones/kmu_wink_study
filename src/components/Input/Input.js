import React from 'react';

import './Input.css';

function Input(props) {
	return <input className="Input" name={props.name} placeholder={props.placeholder} onChange={props.onChange} defaultValue={props.defaultValue} value={props.value} />;
}

export default Input;