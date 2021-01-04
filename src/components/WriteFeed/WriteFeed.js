import React, { useEffect, useState } from 'react';

import './WriteFeed.css';

import Input from '../Input/Input.js'
import Textarea from '../Textarea/Textarea.js'
import Button from '../Button/Button.js'

export default function WriteFeed(props) {
    const [state, setState] = useState({
        owner: "",
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
        if (state.owner == "" || state.content == "") {
            return;
        }
        props.writeFunction(state.owner, state.content);
        setState({
            owner: "",
            content: ""
        });
    };

	return (
		<div className="WriteFeed">
			<Input name="owner" placeholder="이름" value={state.owner} onChange={getValue}/>
			<Textarea name="content" placeholder="내용" value={state.content} onChange={getValue}/>
            <Button value="등록" onClick={writeAction}/>
		</div>
	);
}