import {useState, useEffect } from 'react';

const useFetch = (callback, url) => {

    const [loading, setLoading] = useState(false);
  
    const fetchInitalData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const initalData = await response.json();
      console.log(initalData.body);
      callback(initalData.body);
      setLoading(false);
    }
  
    useEffect( () => {
      fetchInitalData();
    }, []);
  
    return loading;
  
  }

  export default useFetch;