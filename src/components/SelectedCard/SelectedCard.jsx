
import React from 'react';

const SelectedCard = ({player, removePlayer}) => {

     const handleRemove=()=>{
        removePlayer(player)
     }
    return (
         <div className='border-1 mt-5 border-gray-200 p-4 rounded-2xl flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <img src={player.player_image} className='w-[50px] h-[50px] rounded-xl' alt='image'/>
                <div className=''>
                    <h1 className='font-bold'>{player.player_name}</h1>
                    <p className='text-xs'>{player.playing_role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
              <img src='https://i.ibb.co.com/kYQBQX4/delete.png' alt="delete"/>
            </div>
         </div>
    );
};

export default SelectedCard;