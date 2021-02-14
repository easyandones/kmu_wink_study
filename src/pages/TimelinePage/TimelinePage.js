import React, { useEffect, useState } from "react";

import "./TimelinePage.css";

import WriteFeed from "../../components/WriteFeed/WriteFeed.js";
import Timeline from "../../components/Timeline/Timeline.js";

export default function TimelinePage(props) {
    const API_SERVER = "http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com";

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const getFeeds = async () => {
            const readResult = await fetch(
                API_SERVER + "/feed/",
                {
                    method: "GET",
                    headers: {
                        "Authorization": "Token " + window.sessionStorage.getItem("token")
                    }
                }
            );
            const readJson = await readResult.json();
            var propsData = {};
            try {
                propsData = readJson.map(read => {
                    return {
                        content: read.content
                    };
                });
            }
            catch {
                alert("로그인 데이터가 없습니다.");
            }
            setFeeds(propsData);
        };
        getFeeds();
    }, []);

    async function newFeed(owner, content) {
        await fetch(
            API_SERVER + "/feed/",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Token " + window.sessionStorage.getItem("token")
                },
                body: JSON.stringify({
                    owner: owner,
                    content: content
                })
            }
        );
    }

    if (window.sessionStorage.getItem("login") == null) {
        return (
            <div className="TimelinePage">
                로그인이 필요합니다.
            </div>
        )
    }

    return (
        <div className="TimelinePage">
            <WriteFeed writeFunction={newFeed}/>
            <Timeline feeds={feeds} />
        </div>
    );
}