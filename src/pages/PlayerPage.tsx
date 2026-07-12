import './PlayerPage.css';
import { HeaderComponent } from '@components/HeaderComponent';
import { PlayerDetailComponent } from '@components/PlayerDetailComponent';

const PlayerPage = () => {

  return (
    <section className='playerpage-section'>
        <HeaderComponent />
        <PlayerDetailComponent title='Player Details' description='View detailed information about the selected player.' />
    </section>
  );
}

export default PlayerPage;