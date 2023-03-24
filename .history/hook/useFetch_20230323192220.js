import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8a34786708mshbd14536c5d6e1d4p1337fbjsnb0b0919ec98a',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
        url: `https://jsearch.p.rapidapi.com/search${endpoint}`,
        params: {query: 'Python developer in Texas, USA', page: '1', 
        num_pages: '1'},
    };
}
    
