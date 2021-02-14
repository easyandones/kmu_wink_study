import React, { useEffect, useState } from 'react';

import './WriteFeed.css';

import Input from '../Input/Input.js'
import Textarea from '../Textarea/Textarea.js'
import Button from '../Button/Button.js'

export default function WriteFeed(props) {
    const [state, setState] = useState({
        content: ""
    });

    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const writeAction = e => {
        if (state.content == "") {
            return;
        }
        props.writeFunction(state.owner, state.content);
        setState({
            content: ""
        });
    };

	return (
		<div className="WriteFeed">
			<Textarea name="content" placeholder="내용" value={state.content} onChange={getValue}/>
            <Button onClick={writeAction}>등록</Button>
		</div>
	);
}