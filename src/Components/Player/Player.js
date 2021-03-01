import React, { useEffect, useState } from 'react';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './Player.css';
const Player = () => {
    const [players,setPlayer] = useState([]);
    useEffect(() => {
        fetch('https://api.mocki.io/v1/767e27f9')
        .then(res => res.json())
        .then(data => setPlayer(data))
    },[])
    const [selected,setSelected] = useState([]);

    const handleAddPlayer = (player) => {
        const newSelected =[...selected,player];
        setSelected(newSelected);
    }
    return (
        <div className="container">
            <div className ="player-container">
                {
                    players.map((pl) => <PlayerDetails handleAddPlayer={handleAddPlayer} player={pl}></PlayerDetails>)
                }
            </div>
            <div className="selected-player">
                <SelectedPlayer selected={selected}></SelectedPlayer>
            </div>
        </div>
    );
};

export default Player;