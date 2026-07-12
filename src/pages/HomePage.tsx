import { useState } from 'react';
import './HomePage.css';
import Paper from '@mui/material/Paper';
import { HeaderComponent } from '@components/HeaderComponent';
import { PlayerFormComponent } from '@components/PlayerFormComponent';
import { PlayerDataComponent } from '@components/PlayerDataComponent';

import { player } from '@utils/types';
import { useGetPlayers } from '../hooks/playerHooks';

export interface PlayerData {
  id: number;
  name: string;
  position: string;
  age: number;
  goals: number;
  passes: number;
  assists: number;
  shots: number;
  matches_own: number;
  score: number
}

const HomePage = () => {
  // const {data, loading, error} = useGetPlayers<player>();
  const [apiData, setApiData] = useState([]);

  const handleFormSuccess = (data: []) => {
    setApiData(data);
  }

  const {data, loading, error} = useGetPlayers<player>();

  return (
    <section className='homepage-section'>
        <HeaderComponent />
        <PlayerFormComponent onSuccess={handleFormSuccess} title='Add Player' description='Fill in the details to add a new player.' />
        {apiData.length > 0 ? (
          <PlayerDataComponent data={apiData} loading={loading} error={error} title='Player Data' description='View and manage player information.' />
        ) : (
          <PlayerDataComponent data={data} loading={loading} error={error} title='Player Data' description='View and manage player information.' />
        )}
    </section>
  );
}

export default HomePage;
