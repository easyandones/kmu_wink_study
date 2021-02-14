import React, { useEffect, useState } from "react";
import {useHistory} from "react-router";
import {createAccount} from "../../server/Accounts/Accounts.js";

import "./SignupPage.css";

import Input from "../../components/Input/Input.js";
import Button from "../../components/Button/Button.js";

export default function SignupPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    const trySignup = async() => {
        const response = await createAccount(username, password, lastName, firstName, email);
        const status = response.status;
        const jsonData = await response.json();
        if (status == 201) {
            alert("회원가입 완료");
            history.push("/login");
        }
        else {
            alert("회원가입 실패\n\n" + JSON.stringify(jsonData));
        }
    }

    return (
        <div className="SignupPage">
            <div>
                로그인
            </div>
            <Input placeholder="아이디" onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="비밀번호" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <Input placeholder="성" onChange={(e) => setLastName(e.target.value)}/>
            <Input placeholder="이름" onChange={(e) => setFirstName(e.target.value)}/>
            <Input placeholder="이메일" onChange={(e) => setEmail(e.target.value)}/>
            <Button onClick={trySignup}>회원가입</Button>
        </div>
    );
}