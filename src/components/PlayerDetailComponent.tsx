import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useParams } from 'react-router-dom';
import { useGetPlayerDetail } from '../hooks/playerDetailHook';
import { player } from '@utils/types';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { useEffect, useState, useRef } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react';

interface PlayerDataComponentProps {
  title: string;
  description: string;
}

function createData(
  name: string,
  value: number,
) {
  return { name, value };
}

const goalChartSetting = {
  xAxis: [
    {
      label: 'Number of Goals',
    },
  ],
  height: 400,
  sx: {
      ['.${axisClasses.left} .${axisClasses.label}']: {
        transform: "translate(20px, 0)",
      },
  },
  margin: { left: 50 },
}

const shotsChartSetting = {
  xAxis: [
    {
      label: 'Number of Shots',
    },
  ],
  height: 400,
  sx: {
      ['.${axisClasses.left} .${axisClasses.label}']: {
        transform: "translate(20px, 0)",
      },
  },
  margin: { left: 50 },
}

const assistsChartSetting = {
  xAxis: [
    {
      label: 'Number of Assists',
    },
  ],
  height: 400,
  sx: {
      ['.${axisClasses.left} .${axisClasses.label}']: {
        transform: "translate(20px, 0)",
      },
  },
  margin: { left: 50 },
}

const matchesChartSetting = {
    xAxis: [
    {
      label: 'Number of Matches Owned',
    },
    ],
    height: 400,
    sx: {
        ['.${axisClasses.left} .${axisClasses.label}']: {
            transform: "translate(20px, 0)",
        },
    },
    margin: { left: 50 },
}
 
const savesChartSetting = {
    xAxis: [
    {
      label: 'Number of Saves Done',
    },
    ],
    height: 400,
    sx: {
        ['.${axisClasses.left} .${axisClasses.label}']: {
            transform: "translate(20px, 0)",
        },
    },
    margin: { left: 50 },
}

const cleansheetChartSetting = {
    xAxis: [
    {
      label: 'Number of Clean Sheets',
    },
    ],
    height: 400,
    sx: {
        ['.${axisClasses.left} .${axisClasses.label}']: {
            transform: "translate(20px, 0)",
        },
    },
    margin: { left: 50 },
}

function valueFormatter(value: number | null) {
  return `${value}`;
}

const BarChartPrint = (data, text) => {
    console.log("text", text)
    console.log("goalData", data["goalsData"])
    if(text == "goals") {
        return (<BarChart
                dataset={data["goalsData"]}
                yAxis={[{ width:150, scaleType: 'band', dataKey: "name",
                tickLabelStyle: {
                    maxWidth: 150,
                    whiteSpace: 'nowrap',
                    // Rotates text so it doesn't overlap
                    fontSize: 12,
                }
                }]}
                series={[{ dataKey: 'goals', label: 'Goals by other ' +  data["position"] + ' Players', valueFormatter, color: '#ff5722'  }]}
                layout="horizontal"
                {...goalChartSetting}
                />)
    } else if( text == "shots") {
        return (<BarChart
                dataset={data["shotsData"]}
                yAxis={[{ width:150, scaleType: 'band', dataKey: "name",
                tickLabelStyle: {
                    maxWidth: 150,
                    whiteSpace: 'nowrap',
                    fontSize: 12,
                }
                }]}
                series={[{ dataKey: 'shots', label: 'Shots by other ' +  data["position"] + ' Players', valueFormatter, color: '#061299'  }]}
                layout="horizontal"
                {...shotsChartSetting}
                />)
    } else if (text == "assists") {
        return (<BarChart
                dataset={data["assistsData"]}
                yAxis={[{ width:150, scaleType: 'band', dataKey: "name",
                tickLabelStyle: {
                    maxWidth: 150,
                    whiteSpace: 'nowrap',
                    fontSize: 12,
                }
                }]}
                series={[{ dataKey: 'assists', label: 'Assists by other ' +  data["position"] + ' Players', valueFormatter, color: '#04782e'  }]}
                layout="horizontal"
                {...assistsChartSetting}
                />)
    } else if (text == "passes") {
        return (<BarChart
                dataset={data["passesData"]}
                yAxis={[{ width:150, scaleType: 'band', dataKey: "name",
                tickLabelStyle: {
                    maxWidth: 150,
                    whiteSpace: 'nowrap',
                    fontSize: 12,
                }
                }]}
                series={[{ dataKey: 'passes', label: 'Passes by other ' +  data["position"] + ' Players', valueFormatter, color: '#78056b'  }]}
                layout="horizontal"
                {...assistsChartSetting}
                />)
    } else if (text == "matches") {
        return (<BarChart
                dataset={data["matchesData"]}
                yAxis={[{ width:150, scaleType: 'band', dataKey: "name",
                tickLabelStyle: {
                    maxWidth: 150,
                    whiteSpace: 'nowrap',
                    fontSize: 12,
                }
                }]}
                series={[{ dataKey: 'matches_own', label: 'Matches Owned by other ' +  data["position"] + ' Players', valueFormatter, color: '#78056b'  }]}
                layout="horizontal"
                {...matchesChartSetting}
                />)
    } else if (text == "saves") {
        return (<BarChart
                dataset={data["savesData"]}
                yAxis={[{ width:150, scaleType: 'band', dataKey: "name",
                tickLabelStyle: {
                    maxWidth: 150,
                    whiteSpace: 'nowrap',
                    fontSize: 12,
                }
                }]}
                series={[{ dataKey: 'saves', label: 'Saves done by other ' +  data["position"] + ' Players', valueFormatter, color: '#d40909'  }]}
                layout="horizontal"
                {...savesChartSetting}
                />)
    } else if (text == "cleansheets") {
        return (<BarChart
                dataset={data["cleansheetData"]}
                yAxis={[{ width:150, scaleType: 'band', dataKey: "name",
                tickLabelStyle: {
                    maxWidth: 150,
                    whiteSpace: 'nowrap',
                    fontSize: 12,
                }
                }]}
                series={[{ dataKey: 'clean_sheets', label: 'Clean Sheets by other ' +  data["position"] + ' Players', valueFormatter, color: '#c4d10a'  }]}
                layout="horizontal"
                {...cleansheetChartSetting}
                />)
    }
}

export function PlayerDetailComponent({ title, description }: PlayerDataComponentProps) {

    const { id } = useParams();
    const {data, loading, error} = useGetPlayerDetail<player>(id);
    // const [myState, setMyState] = useState(null);
    
    return (
        <Paper className="player-detail-paper">
            {loading && (
                <p>Loading players...</p>
            )}
            {error && (
                <p>Error fetching players. Please try again.</p>
            )}
            {data && (
                <section>
                   <Grid container wrap="nowrap" size={12} className="player-options">
                        <Grid size={{ xs: 8 }}><h2>{data.name}</h2></Grid>
                        <Grid size={{ xs: 4 }}><h2 className='score-header'>Score</h2></Grid>
                    </Grid>  
                    <Grid container wrap="nowrap" size={12}>   
                        <Grid size={{ xs: 9 }}>{data.position}</Grid>
                        <Grid size={{ xs: 3 }}>
                            <Gauge
                                value={data.score}
                                startAngle={-110}
                                endAngle={110}
                                width={200} 
                                height={200}
                                sx={{
                                    '& .MuiGauge-valueText': {
                                        fontSize: 20,
                                        transform: 'translate(0px, 0px)',
                                    }
                                }}
                                text={({ value, valueMax }) => `${value} / ${valueMax}`}
                            />
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" size={12}>
                        <Grid size={{ xs: 5 }}>
                            <TableContainer component={Paper}>
                                <Table 
                                    aria-label="simple table">
                                    <TableHead sx={{ 
                                        backgroundColor: 'primary.main', // Uses theme primary color
                                        '& .MuiTableCell-head': {
                                            color: 'white',               // Changes text color of header cells
                                        },
                                    }}>
                                    <TableRow>
                                        <TableCell>Data</TableCell>
                                        <TableCell align="left">Value</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            <TableRow
                                                key="age"
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                   Age
                                                </TableCell>
                                                <TableCell align="left">{data.age}</TableCell>
                                            </TableRow>
                                            <TableRow
                                                key="leagues"
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                   leagues
                                                </TableCell>
                                                <TableCell align="left">{data.leagues}</TableCell>
                                            </TableRow>
                                            <TableRow
                                                key="goals"
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                   Goals
                                                </TableCell>
                                                <TableCell align="left">{data.goals}</TableCell>
                                            </TableRow>
                                            <TableRow
                                                key="assists"
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                   Assists
                                                </TableCell>
                                                <TableCell align="left">{data.assists}</TableCell>
                                            </TableRow>
                                            <TableRow
                                                key="passes"
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                   Passes
                                                </TableCell>
                                                <TableCell align="left">{data.passes}</TableCell>
                                            </TableRow>
                                            <TableRow
                                                key="matches_own"
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                   Matches Own
                                                </TableCell>
                                                <TableCell align="left">{data.matches_own}</TableCell>
                                            </TableRow>
                                            <TableRow
                                                key="shots"
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                   Shots
                                                </TableCell>
                                                <TableCell align="left">{data.shots}</TableCell>
                                            </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>

                    {/* bar chart of player */}
                    <Grid container wrap="nowrap" size={12} className="player-options">
                        {data.position == "Goalkeeper" ? (
                            <section className = "barchart-section">
                                <Grid continer wrap="nowrap" size = {12}>
                                    {BarChartPrint(data, "saves")}
                                </Grid>
                                <Grid continer wrap="nowrap" size = {12}>
                                    {BarChartPrint(data, "cleansheets")}
                                </Grid>
                                <Grid continer wrap="nowrap" size = {12}>
                                    {BarChartPrint(data, "matches")}
                                </Grid>
                            </section>
                        ) : (
                            <section className = "barchart-section">
                                <Grid continer wrap="nowrap" size = {12}>
                                    {BarChartPrint(data, "matches")}
                                </Grid>
                                <Grid continer wrap="nowrap" size = {12}>
                                    {BarChartPrint(data, "goals")}
                                </Grid>
                                <Grid continer wrap="nowrap" size = {12}>
                                    {BarChartPrint(data, "shots")}
                                </Grid>
                                <Grid continer wrap="nowrap" size = {12}>
                                    {BarChartPrint(data, "assists")}
                                </Grid>
                                <Grid continer wrap="nowrap" size = {12}>
                                    {BarChartPrint(data, "passes")}
                                </Grid>
                                
                            </section>
                        )}
                    </Grid>
                </section>
                
            )}
            
        </Paper>
    );
}
