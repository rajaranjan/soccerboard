import logo from '@assets/logo.svg';
import Paper from '@mui/material/Paper';


export function HeaderComponent() {

    return (
        <Paper className="header-section">
            <img src={logo} alt="Soccerboard logo" className="logo" />
            <div className='header-text'>
              <h1>Soccerboard</h1>
              <p>Player analytics & slection dashboard</p>
            </div>
        </Paper>
    );
}
