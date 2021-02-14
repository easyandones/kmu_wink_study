import React, { useEffect, useState } from 'react';
import {readAccount} from "../../server/Accounts/Accounts.js";

import './MyPage.css';

import Profile from '../../components/Profile/Profile.js';

export default function MyPage(props) {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        async function getProfile() {
            const propsData = await readAccount();
            setProfile(propsData);
        };
        getProfile();
    }, []);

    if (window.sessionStorage.getItem("login") == null) {
        return (
            <div className="MyPage">
                로그인이 필요합니다.
            </div>
        );
    }

    return (
        <div className="MyPage">
            <div>
                마이페이지
            </div>
            <Profile name={profile.username} email={profile.email} />
            <div>
                이름 : {profile.lastName}{profile.firstName}
            </div>
        </div>
    );
}