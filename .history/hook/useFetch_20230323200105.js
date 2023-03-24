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
            'X-RapidAPI-Key': '8a34786708mshbd14536c5d6e1d4p1337fbjsnb0b0919ec98a',
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
        setLoading(true);
        fetchData();
    }

    return { data, loading, error, refetch }; 

}
    


export default useFetch;