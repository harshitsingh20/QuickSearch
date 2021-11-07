// Search engine ID:- de2bf0589f0deb623

import React, { useEffect, useState } from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = "de2bf0589f0deb623";

const useGoogleSearch = (term) =>{
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response)=>response.json()).then((result)=>{
                setData(result);
            })
        }
        fetchData();
    }, [term])

    return { data };

}

export default useGoogleSearch;