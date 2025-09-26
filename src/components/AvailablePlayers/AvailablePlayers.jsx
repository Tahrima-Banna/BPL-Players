import React, { use } from 'react';

import PlayerCard from '../PlayersCard/PlayerCard';

const AvailablePlayers = ({PlayersPromise,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasedPlayers}) => {
     const playersData = use(PlayersPromise);
    
    return (
<div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
  {
    playersData.map(player=><PlayerCard  player={player} availableBalance={availableBalance} 
      setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></PlayerCard>)
  }
</div>
    );
};

export default AvailablePlayers;