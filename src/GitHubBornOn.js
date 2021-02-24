import { API } from 'aws-amplify';
import React 
    , {
        useState,
        useEffect
    }
from 'react';

export const GitHubBornOn = () => {

    //Variable to hold github creation date
    const [createdOn, showCreationDate] = useState("");

    //Function that will call API get/born
    const fetchGitHubCreationDate = async () => {
        try {
            //Try to get the data from the API endpoint /born
            const data = await API.get('api9bc74a79', '/born');
            showCreationDate(data.createdOn);
        }
        catch(err) {
            console.error(err);
        }
    };

    //Call fetchGitHubCreationDate when component loads
    useEffect(
        () => {
            fetchGitHubCreationDate();
        }
        ,[]
    );
    return(
        <h2>
            my github name goes here - my github created at goes here {createdOn}
        </h2>
    );
};