import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

interface PlayerFormComponentProps {
  title: string;
  description: string;
}

export function PlayerFormComponent({ title, description }: PlayerFormComponentProps) {
    
    const handleChange = (event: SelectChangeEvent) => {
        console.log(event.target.value);
    };
    return (
        <Paper className="player-options-paper">
            <FormControl fullWidth>
                <Grid container wrap="nowrap" size={12} className="player-options">
                    <Grid size={{ xs: 5 }}>
                        <InputLabel id="demo-simple-select-label">Position</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Position"
                            onChange={handleChange}
                            className="position-select"
                            >
                            <MenuItem value={"Forward"}>Forward</MenuItem>
                            <MenuItem value={"Midfielder"}>Midfielder</MenuItem>
                            <MenuItem value={"Defender"}>Defender</MenuItem>
                            <MenuItem value={"Goalkeeper"}>Goalkeeper</MenuItem>
                        </Select>
                    </Grid>
                    <Grid size={{ xs: 3 }}>
                        <Button variant="contained">Search</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Paper>
  );
}
