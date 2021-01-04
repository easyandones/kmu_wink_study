import React, { useEffect, useState } from 'react';

import './MyPage.css';

import Profile from '../../components/Profile/Profile.js';

export default function MyPage(props) {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const getProfile = () => {
            const propsData = {
                name: "이름 테스트",
                email: "이메일 테스트"
            };
            setProfile(propsData);
        };
        getProfile();
    }, []);

    return (
        <div className="MyPage">
            <div>
                마이페이지
            </div>
            <Profile name={profile.name} email={profile.email} />
        </div>
    );
}