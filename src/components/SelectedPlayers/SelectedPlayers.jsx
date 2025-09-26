import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers,removePlayer}) => {
    //const purPlayer =purchasedPlayers
    
    return (
        <div className='w-11/12 mx-auto py-10'>
         {
            purchasedPlayers.map(player=><SelectedCard removePlayer={removePlayer}  player={player}></SelectedCard>)
         }
        </div>
    );
};

export default SelectedPlayers;