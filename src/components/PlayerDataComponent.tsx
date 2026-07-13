import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { PlayerData } from '@pages/HomePage';

interface PlayerDataComponentProps {
  title: string;
  description: string;
  data: [PlayerData] | null;
  loading: false,
  error: false
}
export const PlayerDataComponent: React.FC<PlayerDataComponentProps> = ({ data, loading, error }) => {
    // const [data, setData] = useState(selectData);
    // const {data, loading, error} = useGetPlayers<player>();

    // Initialize the navigate function
    const navigate = useNavigate();

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'position', headerName: 'Position', flex: 1 },
        { field: 'goals', headerName: 'Goals', flex: 1 },
        { field: 'passes', headerName: 'Passes', flex: 1 },
        { field: 'assists', headerName: 'Assists', flex: 1 },
        { field: 'shots', headerName: 'Shots', flex: 1 },
        { field: 'matches_own', headerName: 'Matches Owned', flex: 1 },
        { field: 'age', headerName: 'Age', flex: 1 },
        { field: 'saves', headerName: 'Saves', flex: 1 },
        { field: 'clean_sheets', headerName: 'Clean Sheets', flex: 1 },
        { field: 'score', headerName: 'Score', flex: 1 },
        {
            field: 'action',
            headerName: 'Details',
            flex: 1,
            sortable: false,
            renderCell: (params) => (
            <IconButton onClick={() => handleRedirect(params.id)}>
                <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
            ),
        }
    ];

    const handleRedirect = (id): void => {
        console.log("pp", id)
        // Navigate to the target internal route
        navigate('/player/' + id); 
    };

    return (
        <Paper className="player-data-paper">
            {loading && (
                <p>Loading players...</p>
            )}
            {error && (
                <p>Error fetching players. Please try again.</p>
            )}

            {data && (
                console.log("players --- ",data),
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                        }}
                        sx={{
                            // Styles the header cells
                            '& .MuiDataGrid-columnHeader': {
                                backgroundColor: '#1976d2',
                                color: '#ffffff',
                            },
                            '& .MuiDataGrid-filler': {
                                backgroundColor: '#1976d2',
                            }
                        }}
                        pageSizeOptions={[10, 20]}
                        disableRowSelectionOnClick
                    />
                </div>
            )}
            
        </Paper>
    );
}
