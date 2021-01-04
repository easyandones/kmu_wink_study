import React from 'react';

import './Profile.css';

export default function Profile(props){
    return (
        <div className="Profile">
            <div>
                이름 : {props.name}
            </div>
            <div>
                이메일 : {props.email}
            </div>
        </div>
    );
}