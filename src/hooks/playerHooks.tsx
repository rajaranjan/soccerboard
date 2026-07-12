import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { FetchState, player } from '../utils/types';

export function useGetPlayers<T>(): FetchState<T> {
  // const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [players, setPlayers] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  
  useEffect(() => {
    const getPlayers = async () => {
        // setFetchState(FetchState.LOADING);
        setPlayers({ data: null, loading: true, error: null });
        try {
          // Simulate an API call
          const response = await axios.get<player[]>('http://127.0.0.1:8001/v1/players');
          const resp: Array<player> = response.data;
          // console.log("fetched players --- ", resp);
          setPlayers({ data: resp, loading: false, error: null });
          // setFetchState(FetchState.SUCCESS);
        } catch (err) {
          setPlayers({ data: null, loading: false, error: err.message });
        }
    }
    getPlayers()
  }, []);
  
  return players;
}
