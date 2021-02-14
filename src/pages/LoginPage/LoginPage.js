import React, { useEffect, useState } from "react";
import {useHistory} from "react-router";
import {getToken} from "../../server/Accounts/Accounts.js";

import "./LoginPage.css";

import Input from "../../components/Input/Input.js";
import Button from "../../components/Button/Button.js";

export default function LoginPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const tryLogin = async() => {
        const response = await getToken(username, password);
        const status = response.status;
        const jsonData = await response.json();
        if (status == 200) {
            window.sessionStorage.setItem("token", jsonData.token);
            window.sessionStorage.setItem("login", true);
            alert("로그인 완료");
            history.push("/timeline");
        }
        else {
            alert("로그인 실패\n\n" + JSON.stringify(jsonData));
        }
    }

    return (
        <div className="LoginPage">
            <div>
                로그인
            </div>
            <Input placeholder="아이디" onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="비밀번호" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={tryLogin}>로그인</Button>
        </div>
    );
}