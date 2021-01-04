import React, { useEffect, useState } from 'react';

import './TimelinePage.css';

import WriteFeed from '../../components/WriteFeed/WriteFeed.js';
import Timeline from '../../components/Timeline/Timeline.js';

export default function TimelinePage(props) {
    const API_SERVER = "http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com"

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const getFeeds = async () => {
            const readResult = await fetch(
                API_SERVER + "/feed/",
                {
                    method: "get"
                }
            );
            const readJson = await readResult.json();
            const propsData = readJson.map(read => {
                return {
                    owner: read.owner,
                    content: read.content
                };
            });
            setFeeds(propsData);
        };
        getFeeds();
    }, []);

    async function newFeed(owner, content) {
        await fetch(
            API_SERVER + "/feed/",
            {
                method: "post",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    owner: owner,
                    content: content
                })
            }
        );
    }

    return (
        <div className="TimelinePage">
            <WriteFeed writeFunction={newFeed}/>
            <Timeline feeds={feeds} />
        </div>
    );
}