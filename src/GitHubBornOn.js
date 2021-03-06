import { API } from 'aws-amplify';
import React
    ,{
        useState
        , useEffect
    } from 'react';

export const GitHubBornOn = () => {

    const getData = async () => {
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
            getData();
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