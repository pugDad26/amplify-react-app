import React
    ,{
        useState
        , useEffect
    } from 'react';

import { API } from 'aws-amplify';

export const GitHubBornOn = () => {

    const fetchData = async () => {
        try {
            const data = await API.get("api9bc74a79", "/born");
            showInfo(data.borninfo);
        }
        catch(err) {
            console.error(err);
        }
    };

    useEffect(
        () => {
            fetchData();
        }
        , []
    );

    const [bornInfo, showInfo] = useState({});

    return(
        <h2>
            {bornInfo.login} - {bornInfo.created_at}
        </h2>
    );
};