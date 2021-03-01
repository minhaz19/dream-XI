import React from 'react';
import './PlayerDetails.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
const PlayerDetails = (props) => {
    const {pic,name,salary} = props.player;
    return (
        <div className ="details-container">
            <div className= "player-img">
                <img src={pic} alt=""/>
            </div>
            <h4>Player Name: {name}</h4>
            <p>Salary: {salary}</p>
            <Button color="primary" onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus} />Add player</Button>
        </div>
        
    );
};
export default PlayerDetails;