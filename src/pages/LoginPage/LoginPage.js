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
            window.sessionStorage.setItem("login", username);
            alert("로그인 완료");
            history.push("/timeline");
        }
        else {
            alert("로그인 실패\n\n" + JSON.stringify(jsonData));
        }
    }

    function tryLogout() {
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("login");
        alert("로그아웃 완료\n\n백엔드에 토큰 만료 API가 없어서 실제 토큰이 만료되지 않습니다.");
        history.push("");
    }

    if (window.sessionStorage.getItem("login") != null) {
        return (
            <div className="LoginPage">
                <div>
                    로그아웃
                </div>
                <div>{window.sessionStorage.getItem("login")}님</div>
                <Button onClick={tryLogout}>로그아웃</Button>
            </div>
        );
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