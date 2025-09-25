import React, { use } from 'react';
import userImg from '../../assets/user-1.png'
import flagImg from '../../assets/user-2.png'

const AvailablePlayers = ({PlayersPromise}) => {
     const playersData = use(PlayersPromise);
     console.log(playersData);
    return (
<div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
  {
    playersData.map(player=><div className="card bg-base-100  shadow-sm p-4">
  <figure>
    <img
      src={player.player_image}
      alt="Shoes" className='w-full h-[300px] object-cover'/>
  </figure>
  <div className="">
   <div className='flex mt-4'>
    <img src={userImg} alt=''/> <h2 className="card-title ml-2">{player.player_name}</h2>
   </div>
   <div className='flex justify-between mt-4 border-b-1 border-gray-200 pb-2'>
     <div className='flex items-center'>
        <img className='w-[20px] h-[20px]' src={flagImg} alt=''/><h3 className='ml-2'>{player.player_country}</h3>
     </div>
     <button className='btn'>{player.playing_role}</button>
   </div>

   <div className='flex justify-between font-bold py-2'>
     <span>Rating</span>
     <span>{player.rating}</span>
   </div>
   <div className='flex justify-between py-2'>
     <span className='font-bold'>{player.bating_style}</span>
     <span>{player.bowling_style}</span>
   </div>
    <div className="flex justify-between mt-4 items-center">
     <p className='font-bold'>Price:${player.price}</p>
      <button className="btn">Choose Player</button>
    </div>
  </div>
</div>)
  }
</div>
    );
};

export default AvailablePlayers;