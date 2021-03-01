import React from 'react';
import './SelectedPlayer.css'
const SelectedPlayer = (props) => {
    
    const selectedPlayer = props.selected;
    let totalSalary = 0;
    for (let i = 0; i < selectedPlayer.length; i++) {
        const player = selectedPlayer[i];
        const tempSalary = (player.salary).split('$');
        const playerSalary = parseFloat(tempSalary[1]);
        totalSalary = Number((totalSalary + playerSalary).toFixed(2));
    }
   
    return (
        <div>
            <h2>Selected Player: {selectedPlayer.length}</h2>
            <div>
                {
                    selectedPlayer.map((playerInfo) => <li>Name: {playerInfo.name} ({playerInfo.salary})</li>)
                }
            </div>
            <h5>Total Budget: ${totalSalary}</h5>
        </div>

    );
};

export default SelectedPlayer;