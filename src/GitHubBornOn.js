import { API } from 'aws-amplify';
import React 
    , {
        useState,
        useEffect
    } from 'react';

export const GitHubBornOn = () => {

    //Function that will call API get/born
    const getData = async () => {
        try {
            //Try to get the data from the API endpoint /born
            const data = await API.get("api9bc74a79", "/born");
            showData(data.bornInfo);
            console.log(data);//it's gettting the data
        }
        catch(err) {
            console.error(err);
        }
    };

    //Call fetchGitHubCreationDate when component loads
    useEffect(
        () => {
            getData();
        }
        ,[]
    );

    //Variable to hold github creation date
    const [bornInfo, showData] = useState({});
    
    return(
        <h2>
            {bornInfo.login} -- {bornInfo.created_at}
        </h2>
    );
};