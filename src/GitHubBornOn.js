import { API } from 'aws-amplify';
import React 
    , {
        useState,
        useEffect
    }
from 'react';

export const GitHubBornOn = async () => {

    //Variable to hold github creation date
    const [createdOn, showCreationDate] = useState("");

    //Function that will call API get/born
    const fetchGitHubCreationDate = () => {
        try {
            //Try to get the data from the API endpoint /born
            const data = await API.get('', '/born');
        }
        catch(err) {
            console.error(err);
        }
    }
    return(
        <h2>
            my github name goes here - my github created at goes here
        </h2>
    );
};

