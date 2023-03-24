import { useState, useEffect } from 'react';
import axios from 'axios';




const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query},
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            
            setData(response.data.data);
            setIsLoading(false);
            
        } catch (error) {
            setError(error);
            alert('Error fetching data. Please try again later.');
            
        } finally {
            setIsLoading(false);

        }
    }

    useEffect(() => {
        fetchData();

}, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, loading, error, refetch }; 

}
    
