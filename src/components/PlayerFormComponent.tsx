import { useState } from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { PlayerData } from '@pages/HomePage';
import React from 'react';
import axios from 'axios'; 
import { player } from '../utils/types';

interface PlayerFormComponentProps {
  title: string;
  description: string;
  onSuccess: (data: [PlayerData]) => void;
}

export const PlayerFormComponent: React.FC<PlayerFormComponentProps> = ({ onSuccess }) => {
    
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Stop page reload
        if (!selectedValue) return alert('Please select an option');

        setLoading(true);
        try {
            const response = await axios.get<player[]>('http://127.0.0.1:8001/v1/players?position=' + selectedValue );
            const result: Array<player> = response.data;
            
            // Send the fetched data up to the parent component
            onSuccess(result); 
        } catch (error) {
            console.error('API Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper className="player-options-paper">
            <form onSubmit={handleChange}>
                <Grid container wrap="nowrap" size={12} className="player-options">
                    <Grid size={{ xs: 5 }}>
                        <InputLabel id="position-select-label">Position</InputLabel>
                        <Select
                            labelId="position-select"
                            id="position-select"
                            label="Position"
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
                            className="position-select"
                            >
                            <MenuItem value={"Forward"}>Forward</MenuItem>
                            <MenuItem value={"Midfielder"}>Midfielder</MenuItem>
                            <MenuItem value={"Defender"}>Defender</MenuItem>
                            <MenuItem value={"Goalkeeper"}>Goalkeeper</MenuItem>
                        </Select>
                    </Grid>
                    <Grid size={{ xs: 3 }}>
                        <Button type="submit" variant="contained" className="search-button"  disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
  );
}
