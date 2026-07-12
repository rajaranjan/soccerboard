import { ExampleCard } from '@components/ExampleCard';
import { useCounter } from '@hooks/useCounter';

import './HomePage.css';
import Paper from '@mui/material/Paper';
import { HeaderComponent } from '@components/HeaderComponent';
import { PlayerFormComponent } from '@components/PlayerFormComponent';
import { PlayerDataComponent } from '@components/PlayerDataComponent';

const HomePage = () => {

  return (
    <section className='homepage-section'>
      
        <HeaderComponent />
        <PlayerFormComponent title='Add Player' description='Fill in the details to add a new player.' />
        <PlayerDataComponent title='Player Data' description='View and manage player information.' />
    </section>
  );
}

export default HomePage;
